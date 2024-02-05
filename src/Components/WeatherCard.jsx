// React
import { useEffect, useState } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import AirIcon from '@mui/icons-material/Air';
import propTypes from 'prop-types';

import { useTheme } from '@emotion/react';

// Styled Components
const StyledWeatherCard = styled(Box)(() => ({

}));

const StyledTitleBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

const StyledTempBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

const StyledHumidityBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const StyledErrorStatus = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const getConvenientColor = (text, timeOfDay) => {
        const lowerCaseText = text.toLowerCase();
    
        // Function to generate a linear gradient between two colors
        const generateLinearGradient = (startColor, endColor) => {
        return `linear-gradient(to bottom, ${startColor}, ${endColor})`;
        };
    
        // Extract hour from the timestamp
        const hour = parseInt(timeOfDay.split(' ')[1].split(':')[0]);
        
        // Check time of day and adjust colors
        let startColor, endColor;
        if ((hour >= 0 && hour < 6) || (hour >= 19 && hour <= 24)) {
        startColor = 'black'; // Night
        endColor = 'darkblue';
        } else if (hour >= 6 && hour < 12) {
        startColor = 'yellow'; // Morning
        endColor = 'orange';
        } else {
        startColor = '#8fe0ff'; // Daytime
        endColor = '#8fe0ff';
        }
    
        // Check weather conditions and return linear gradient
        if (lowerCaseText.includes('cloudy')) {
            return generateLinearGradient('#2b235a', endColor);
        } else if (lowerCaseText.includes('sunny') || lowerCaseText.includes('clear')) {
            return generateLinearGradient('#8fe0ff', endColor);
        } else if (lowerCaseText.includes('partly clear')) {
            return generateLinearGradient('#75b4e3', endColor);
        } else if (lowerCaseText.includes('rain')) {
            return generateLinearGradient('#2b235a', endColor);
        } else if (lowerCaseText.includes('snow')) {
            return generateLinearGradient('white', endColor);
        } else if (lowerCaseText.includes('storm')) {
            return generateLinearGradient('#54416d', endColor);
        } else if (lowerCaseText.includes('fog')) {
            return generateLinearGradient('#54416d', endColor);
        } else {
            return generateLinearGradient(startColor, endColor); // return the linear gradient based on time of day
        }
};


const WeatherCard = ({ city, weatherFunc }) => {
    const [cityWeather, setCityWeather] = useState(null);

    useEffect(() => {
        const fetchCityWeather = async () => {
        try {
            const cityTime = await weatherFunc(city.name);
            setCityWeather(cityTime);
        } catch (error) {
            console.error('Error fetching Weather:', error);
            setCityWeather({ error });
        }
        };

        // Call the function directly, no need for setTimeout
        fetchCityWeather();
    }, [city, weatherFunc]);

    //Styles
    const theme = useTheme()

    const cardStyle = {
        background: cityWeather && !cityWeather.error ? getConvenientColor(cityWeather.current.condition.text, cityWeather.location.localtime) : theme.palette.background.paper,
        width: '100%',
        height: '60vh',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    }


    return (
        <StyledWeatherCard sx={cardStyle}>
        {cityWeather ? (
            cityWeather.error ? (
            <StyledErrorStatus>
                <Typography  variant="h5" color="error">
                {cityWeather?.error?.message}
                </Typography>
                <Typography color="#fff" variant="h6">Try another city</Typography>
            </StyledErrorStatus>
            ) : (
            <>
                <StyledTitleBox>
                <img src={cityWeather.current.condition.icon} alt="" width={130} height={130} />
                <Typography variant="h4" color="#fff">{cityWeather.current.condition.text}</Typography>
                </StyledTitleBox>
                <StyledTempBox>
                <Typography variant="h3" color="#fff">{cityWeather.current.temp_c}°C</Typography>
                <Typography color="#fff" sx={{ textTransform: 'uppercase' }} variant="h6">
                    {cityWeather.location.name}
                </Typography>
                <Typography color="#fff" sx={{ textTransform: 'uppercase' }} variant="h6">
                    {cityWeather.location.localtime}
                </Typography>
                </StyledTempBox>
                <StyledHumidityBox>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}>
                    <Box>
                    <WaterOutlinedIcon sx={{color:'#fff'}} />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography color="#fff" variant="h6">{cityWeather.current.humidity}% </Typography>
                    <Typography color="#fff" variant="h7">Humidity </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}>
                    <Box>
                    <AirIcon sx={{color:'#fff'}} />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography color="#fff" variant="h6">{cityWeather.current.wind_kph} kph </Typography>
                    <Typography color="#fff" variant="h7">Wind Speed </Typography>
                    </Box>
                </Box>
                </StyledHumidityBox>

            </>
            )
        ) : (
            // Loading skeleton or any other placeholder
            <Skeleton variant="rectangular" width={'100%'} height={500} />
        )}
    </StyledWeatherCard>
  );
};

WeatherCard.propTypes = {
  city: propTypes.object,
  weatherFunc: propTypes.func,
};

export default WeatherCard;
