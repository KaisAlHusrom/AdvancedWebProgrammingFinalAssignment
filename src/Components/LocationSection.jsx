import { useEffect, useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { styled } from '@mui/system';
import propTypes from 'prop-types';
import { getCityFromCoordinates } from '../Services/citiesService';
import CityCard from './CityCard';

const StyledLocationSection = styled(Box)(
    () => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    })
    );

const LocationSection = ({functions}) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchLocation = setTimeout( async () => {
            try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const city = await getCityFromCoordinates(latitude, longitude);
                    setLocation({
                    latitude,
                    longitude,
                    city: city ? city : 'Unknown City',
                    });
                    setLoading(false);
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    setLocation({
                        error: "You have to allow the web page to access your location from browser"
                        });
                    setLoading(false);
                },
                // {
                //     enableHighAccuracy: true,
                //     timeout: 5000,
                //     maximumAge: 0
                // }
                );
            } else {
                console.error('Geolocation is not supported by your browser');
                setLoading(false);
            }
            } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            }
        }, 2000)

        // Cleanup function to clear the timeout in case the component unmounts
        return () => clearTimeout(fetchLocation);

    }, []);

    return (
        <StyledLocationSection>
        <Typography variant='h5'>You Are In</Typography>
        {loading ? (
            <Skeleton variant="rectangular" height={200} width={"100%"} />
        ) : (
            location.city
            ?
            <CityCard 
            city={location?.city} 
            functions={
                functions
            } 
            />
            :
            <Typography color="error" variant="h6">{location.error}</Typography>
        )}

        </StyledLocationSection>
    );
};

LocationSection.propTypes = {
    functions: propTypes.object,
};

export default LocationSection;
