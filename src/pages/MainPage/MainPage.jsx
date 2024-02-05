//React
import { useContext, useState } from 'react'

import {
    
} from 'react-redux'

//icons
import CloseIcon from '@mui/icons-material/Close';


//MUI
import {
    Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Snackbar, Typography,
} from '@mui/material'
import { styled } from '@mui/system'

//images
import city from "../../Assets/city.jpg"
import currency from "../../Assets/currencies.jpg"



import {  useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import { ScreenSizeContext } from '../../App';

//Styled Components
const StyledMainPage = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(2)
    })
)


const MainPage = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const {screenSize} = useContext(ScreenSizeContext)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    //Cities Page
    const handleShareCitiesPageClick = () => {
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href + "cities"; // Use window.location.href to get the complete URL

        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Optionally, provide user feedback (e.g., display a notification)
        handleClick();
    };

    const handleOpenCitiesPage = () => {
        navigate("cities")
    }

    //Currencies Page
    const handleShareCurrenciesPageClick = () => {
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href + "currency"; // Use window.location.href to get the complete URL

        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Optionally, provide user feedback (e.g., display a notification)
        handleClick();
    };

    const handleOpenCurrenciesPage = () => {
        navigate("currency")
    }
    
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <StyledMainPage>
            <Card sx={{ width: screenSize === "lg" ? "50%" : screenSize === "md" ? "70%" : "100%" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={city}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cities And Weather
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Discover the world around you with CCServices, 
                    a user-friendly web application that seamlessly combines city exploration and 
                    real-time weather updates. Whether you are a travel enthusiast, 
                    planning a trip, or simply curious about the weather in different locations, our application has you covered.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleShareCitiesPageClick} size="small">Share</Button>
                    <Button size="small" onClick={handleOpenCitiesPage}>Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: screenSize === "lg" ? "50%" : screenSize === "md" ? "70%" : "100%" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={currency}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Currency Converter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Introducing our Currency Converter, a powerful tool 
                        integrated into CCServices that empowers users to effortlessly convert currencies 
                        and stay on top of global financial transactions. Whether you are a frequent traveler, 
                        a business professional, or simply managing your personal finances, 
                        our Currency Converter is designed to simplify the complexities of currency exchange.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleShareCurrenciesPageClick} size="small">Share</Button>
                    <Button size="small" onClick={handleOpenCurrenciesPage}>Learn More</Button>
                </CardActions>
            </Card>

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Link Copied"
                sx={{

                    "& .MuiPaper-root": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                    }
                }}
                action={action}
                />
        </StyledMainPage>
    );
};



export default MainPage;