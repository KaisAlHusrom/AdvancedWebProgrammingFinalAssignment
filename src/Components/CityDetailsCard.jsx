//React
import { useEffect, useState } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Box, Skeleton, Typography,
} from '@mui/material'
import { styled } from '@mui/system'



//propTypes 
import propTypes from 'prop-types'

//Styled Components
const StyledCityDetailsCard = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
    })
)

const StyledBox = styled(Box)(
    () => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    })
);


const CityDetailsCard = ({cityId, functions}) => {

    const [city, setCity] = useState({})
    const [, setCityTime] = useState(null);

    const {
        detailsFunc,
        timeFunc,
    } = functions

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const cityDetails = await detailsFunc(cityId);
                setCity(cityDetails);
        
                // Introduce a delay of one second before making the second request
                setTimeout(async () => {
                const cityTime = await timeFunc(cityId);
                setCityTime(cityTime)
                }, 1000);
            } catch (error) {
                console.error('Error fetching city details:', error);
            }
            };
        
            fetchCity();
    }, [cityId, detailsFunc, timeFunc]);

    return (
        <StyledCityDetailsCard>
            {
                Object.keys(city)?.length > 0
                ?
                (
                    Object.entries(city).map(([key,value], index) => {
                        return (
                            <StyledBox key={index}>
                                <Typography variant="h7">{key}</Typography>
                                <Typography variant="subtitle1">{value}</Typography>
                            </StyledBox>
                        )
                    })
                )
                :(
                    <Skeleton width="100%" animation="wave" />
                )
            }
        </StyledCityDetailsCard>
    );
};

CityDetailsCard.propTypes = {
    cityId: propTypes.number,
    functions: propTypes.object,
}

export default CityDetailsCard;