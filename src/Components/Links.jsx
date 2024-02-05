//React
import {
    
} from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Box,
    Grid,
} from '@mui/material'
import { styled } from '@mui/system'
import { NavLink } from 'react-router-dom'
import MainMenu from '../Routers/Links/MainMenu'
import AdminMainButton from './AdminMainButton/AdminMainButton'

//icons
import MenuIcon from '@mui/icons-material/Menu';
import SettingsDrawer from './SettingsDrawer'

//Styled Components
const StyledLinks = styled(Grid)(
    () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    })
)


const StyledNavLink = styled(NavLink)(
    ({ theme }) => ({
        display: "block",
        marginBottom: theme.spacing(2),
        width: "100%",
        color: theme.palette.text.primary,
        textDecoration: "none",
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        fontWeight: "bold",
        border: "1px solid",
        borderColor: theme.palette.divider,
        transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
        }),
        position: "relative",
        '&.active': {
            backgroundColor: theme.palette.primary.main,
        },

        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        textAlign: "center"
    })
);

const StyledBox = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        right: "0px",
        top: "0px",
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
        }
    })
);

const Links = () => {
    return (
        <StyledLinks container spacing={4}>
            <StyledBox>
            <AdminMainButton
                                type="drawer"
                                appearance='iconButton'
                                icon={<MenuIcon />}
                                title="Settings"
                                willShow={
                                    <SettingsDrawer />
                                }
                                drawerAnchor={"right"}
                            />
            </StyledBox>
            {
                MainMenu.map((link, i)=> {
                    return (
                        <Grid key={i} item xxs={12} sm={6} md={4}>
                            <StyledNavLink to={`${link.path}`}>
                                {link.title}
                            </StyledNavLink>
                        </Grid>
                    )
                })
            }
        </StyledLinks>
    );
};

export default Links;