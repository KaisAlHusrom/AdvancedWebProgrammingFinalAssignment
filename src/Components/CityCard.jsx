import { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Typography,
  Skeleton,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import propTypes from 'prop-types';
import AdminMainButton from './AdminMainButton/AdminMainButton';
import CityDetailsCard from './CityDetailsCard';
import WeatherCard from './WeatherCard';
//icons
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import NearCitiesPopover from './NearCitiesPopover';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const StyledCityCard = styled(Card)(
  () => ({
    width: "100%",
    minHeight: "210px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  })
);

const StyledCardActionArea = styled(Box)(
    () => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    })
);

const StyledCardAction = styled(CardActions)(
    () => ({

    })
);

const CityCard = ({ city, functions }) => {
    const [loading, setLoading] = useState(true);

    const {
        weatherFunc,
        detailsFunc,
        timeFunc,
        nearFunc
    } = functions

    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoading(false);
    };
  // Call the fetchData function when the component mounts
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <StyledCityCard elevation={4}>
        <StyledCardActionArea>
            {/* // Display actual content when data is available */}
            <CardContent>
                {
                    loading ? (
                        // Display skeleton while data is being fetched
                        <Skeleton variant="text" height={40} />
                    ) : (
                        <Typography gutterBottom variant="h5" component="div">
                            {city?.name}, {city?.region}
                        </Typography>
                    )
                }
                {
                    loading ? (
                        // Display skeleton while data is being fetched
                        <Skeleton variant="text" width={80} height={40} />
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Country: {city?.country}
                        </Typography>
                    )
                }
                {
                    loading ? (
                        // Display skeleton while data is being fetched
                        <Skeleton variant="text" width={80} height={40} />
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Country Code: {city?.countryCode}
                        </Typography>
                    )
                }
                
                
            </CardContent>
            <Box>
                <AdminMainButton
                    title="More Info"
                    icon={<InfoOutlinedIcon />}
                    appearance='iconButton'
                    type='modal'
                    putTooltip
                    toolTipPosition={"left"}
                    willShow={
                        <CityDetailsCard 
                        functions={functions}
                        cityId={city?.id} 
                        />
                    }
                />
            </Box>
        </StyledCardActionArea>

                {
                    loading ? (
                        // Display skeleton while data is being fetched
                        <Skeleton sx={{margin: "15px"}} variant="circular" width={40} height={40} />
                    ) : (
                        <StyledCardAction>
                            
                            <AdminMainButton
                                type='modal'
                                appearance='primary'
                                filled
                                icon={<ThunderstormOutlinedIcon />}
                                title='Weather'
                                willShow={
                                <WeatherCard
                                city={city}
                                weatherFunc={weatherFunc}
                                />
                                }
                            />
                            <AdminMainButton
                                title="Near Cities"
                                type='modal'
                                appearance='secondary'
                                filled
                                icon={<LinearScaleIcon />}
                                putBorder
                                willShow={
                                    <NearCitiesPopover
                                    functions={functions}
                                    city={city} />
                                }
                                
                            />
                        </StyledCardAction>
                    )
                }
            

        </StyledCityCard>
    );
};

CityCard.propTypes = {
  city: propTypes.object,
  functions: propTypes.object
};

export default CityCard;
