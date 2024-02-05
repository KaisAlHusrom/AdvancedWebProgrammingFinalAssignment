//React
import { useEffect, useState } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Fade,
    Grid,
    Typography,
} from '@mui/material'
import { styled } from '@mui/system'

//propTypes 
import propTypes from 'prop-types'
import CityCard from './CityCard'

//Styled Components
const StyledNearCitiesPopover = styled(Grid)(
    () => ({
        width: "100%",
    })
)


const NearCitiesPopover = ({city, functions}) => {
    const {
        nearFunc
    } = functions

    const [nearCities, setNearCities] = useState(null)
    useEffect(() => {
        const fetchCityWeather = async () => {
        try {
            const cityTime = await nearFunc(city?.id);
            setNearCities(cityTime);
        } catch (error) {
            console.error('Error fetching near cities:', error);
            // setNearCities({ error });
        }
        };

        // Call the function directly, no need for setTimeout
        fetchCityWeather();
    }, [city, nearFunc]);

    console.log(nearCities)

    return (
        <StyledNearCitiesPopover container gap={2}>
            <Typography variant='h6'>Near Cities From {city?.name}</Typography>
                    {
                        nearCities &&
                        nearCities.map((city, i) => {
                            return (
                                <Fade key={i} in={nearCities !== null}>
                                    <Grid item  xs={12}>
                                        <CityCard functions={functions} key={i} city={city} />
                                    </Grid>
                                </Fade>
                            )
                        })
                    }
        </StyledNearCitiesPopover>
    );
};

NearCitiesPopover.propTypes = {
    city: propTypes.object,
    functions: propTypes.object,
}

export default NearCitiesPopover;