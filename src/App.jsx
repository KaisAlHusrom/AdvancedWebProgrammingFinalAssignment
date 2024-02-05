//React
import { useState, createContext, useEffect } from 'react'


//Components
import CustomThemeProvider from "./Theme/CustomThemeProvider"


//MUI
import {
  Box, Button, ButtonGroup, Container, useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/system'

import "./App.css"
import CustomRouterProvider from './Routers/CustomRouterProvider'



//icons
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import SmartScreenOutlinedIcon from '@mui/icons-material/SmartScreenOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

//redux
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from './Redux/Slices/modeSlice'

//context
const ScreenSizeContext = createContext()
//Styled Components

const StyledApp = styled(Box)(
    () => ({
            width: "100%",
            height: "100vh",
    })
);

const StyledBox = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        left: "30px",
        top: "20px",
        zIndex: 1500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    })
);


const App = () => {
  // Retrieve the screenSize value from localStorage or default to "sm"
    const [screenSize, setScreenSize] = useState(localStorage.getItem('screenSize') || 'sm');
    
    const prefersMd = useMediaQuery('(max-width:960px)');
    //set the screenSize to sm when screen width is down than md
    useEffect(() => {
        if (prefersMd) {
        setScreenSize('sm');
        } else {
        setScreenSize(localStorage.getItem('screenSize') || 'sm');
        }
    }, [prefersMd]);


    useEffect(() => {
        // Save the current screenSize value to localStorage when screenSize changes
        localStorage.setItem('screenSize', screenSize);
    }, [screenSize]);


    const mode = useSelector(state => state.modeSlice.mode)

    useEffect(() => {
        // Save the current screenSize value to localStorage
        localStorage.setItem('mode', mode);
    }, [mode]);

    //handlers
    const dispatch = useDispatch()
    const handleChangeMode = (mode) => {
        dispatch(changeMode({mode}));
    }

    const handleClick = (value) => {
        setScreenSize(value);
    };

    return (
        <CustomThemeProvider>
            <StyledApp>
                <ScreenSizeContext.Provider value={{screenSize}}>
                    <Container maxWidth={screenSize}>
                        <StyledBox>
                            <ButtonGroup
                                orientation='vertical'
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button variant={screenSize === "sm" ? 'contained' : "outlined"} onClick={() => handleClick("sm")}>
                                    <Box minWidth={70}>
                                    Small
                                    </Box>
                                    <MobileScreenShareOutlinedIcon />
                                </Button>
                                <Button variant={screenSize === "md" ? 'contained' : "outlined"} onClick={() => handleClick("md")}>
                                <Box minWidth={70}>
                                    Medium
                                    </Box>
                                    <SmartScreenOutlinedIcon />
                                </Button>
                                <Button variant={screenSize === "lg" ? 'contained' : "outlined"} onClick={() => handleClick("lg")}>
                                <Box minWidth={70}>
                                    Big
                                    </Box>
                                    <TvOutlinedIcon />
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup
                                orientation='vertical'
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button variant={mode === "light" ? 'contained' : "outlined"} onClick={() => handleChangeMode("light")}>
                                    <Box minWidth={70}>
                                    Light
                                    </Box>
                                    <WbSunnyOutlinedIcon />
                                </Button>
                                <Button variant={mode === "dark" ? 'contained' : "outlined"} onClick={() => handleChangeMode("dark")}>
                                <Box minWidth={70}>
                                    Dark
                                    </Box>
                                    <DarkModeOutlinedIcon />
                                </Button>
                            </ButtonGroup>
                        </StyledBox>
                        <CustomRouterProvider />
                    </Container>
                </ScreenSizeContext.Provider>
            </StyledApp>
        </CustomThemeProvider>
    );
};

export {ScreenSizeContext}

export default App;
