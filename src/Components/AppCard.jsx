//React
import {  } from 'react'

import {
    
} from 'react-redux'




//MUI
import {
    Card
} from '@mui/material'
import { styled } from '@mui/system'

//React router Dom
import { Outlet } from 'react-router-dom'
import Links from './Links'

//Styled Components
const StyledWeatherCard = styled(Card)(
    ({ theme }) => ({
        width: "100%",
        height: "100vh",
        padding: theme.spacing(4),
        overflowY: "auto",

    })
)


const AppCard = () => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate("/content")
    // }, [navigate])

    return (
        <StyledWeatherCard>
            <Links />
            <Outlet />
        </StyledWeatherCard>
    );
};

export default AppCard;