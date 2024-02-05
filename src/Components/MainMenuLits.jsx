//React
import {
    
} from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import MainMenu from '../Routers/Links/MainMenu'

import { NavLink } from 'react-router-dom'

//Styled Components
const StyledMainMenuLits = styled(List)(
    ({ theme }) => ({
        width: "100%",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    })
)

const StyledLink = styled(NavLink)(
    ({ theme }) => ({
        width: "100%",
        color: theme.palette.text.primary,
        textDecoration: "none",
        padding: "0",
        borderRadius: "8px",
        transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
        }),
        position: "relative",
        '&.active': {
            backgroundColor: theme.palette.action.selected,
            '&:before': {
                content: "''",
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "5px",
                height: "100%",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "8px 0 0 8px",
            }
        },
    })
);




const MainMenuLits = () => {
    return (
        <StyledMainMenuLits>

                {
                    MainMenu.map((item, key) => {
                        const {path, icon, title} = item
                        return (
                            <ListItem key={key} disablePadding>
                                <StyledLink
                                    to={path}    
                                    >
                                    <ListItemButton >
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItemButton>
                                    
                                </StyledLink>
                            </ListItem>
                        )
                    }
                )}

        </StyledMainMenuLits>
    );
};

export default MainMenuLits;