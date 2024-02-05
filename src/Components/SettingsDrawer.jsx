//React
import {
    
} from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../Redux/Slices/modeSlice';

//icons
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


//MUI
import {
    Box,
    Button,
    ButtonGroup,
    List,
    ListItem,
    Typography,
} from '@mui/material'
import { styled } from '@mui/system'


//Styled Components
const StyledSettingsListContent = styled(List)(
    ({ theme }) => ({
        width: "100%",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    })
)

const StyledListItem = styled(ListItem)(
    () => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    })
)




const SettingsDrawer = () => {
    const dispatch = useDispatch();

    const mode = useSelector(state => state.modeSlice.mode)

    const handleDarkMode = () => {
        dispatch(changeMode({
            mode: "dark"
        }))
    }

    const handleLightMode = () => {
        dispatch(changeMode({
            mode: "light"
        }))
    }


    return (
        <StyledSettingsListContent>
            <StyledListItem>
                <Typography
                variant='subtitle1'
                color="text.secondary"
                fontWeight="bold"
                component="div"
                >
                    Mode Settings
                </Typography>
                <ButtonGroup
                            
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button variant={mode === "light" ? 'contained' : "outlined"} onClick={handleLightMode}>
                                    <Box minWidth={70}>
                                    Light
                                    </Box>
                                    <WbSunnyOutlinedIcon />
                                </Button>
                                <Button variant={mode === "dark" ? 'contained' : "outlined"} onClick={handleDarkMode}>
                                <Box minWidth={70}>
                                    Dark
                                    </Box>
                                    <DarkModeOutlinedIcon />
                                </Button>
                            </ButtonGroup>
            </StyledListItem>
            {/* <StyledListItem>
                <SettingsListItem 
                title="Mode:"
                groupButtons={modeButtons}
                />
            </StyledListItem> */}
        </StyledSettingsListContent>
    );
};

export default SettingsDrawer;