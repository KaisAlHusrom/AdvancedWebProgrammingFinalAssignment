//React
import {  } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Box
} from '@mui/material'
import { styled } from '@mui/system'
import ContentComponent from '../../Components/contentComponent'


//services
import { getCities, getCity, getCityTime, getCitiesNearCity } from '../../Services/citiesService'
import { getCityWeather } from '../../Services/weatherService';

//Styled Components
const StyledCitiesPage = styled(Box)(
    () => ({
    
    })
)


const CitiesPage = () => {
    return (
        <StyledCitiesPage>
            <ContentComponent
                title="Cities"
                getFunc={getCities}
                detailsFunc={getCity}
                timeFunc={getCityTime}
                weatherFunc={getCityWeather}
                nearFunc={getCitiesNearCity}
            />
        </StyledCitiesPage>
    );
};

export default CitiesPage;