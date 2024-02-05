//React
import {
    
} from 'react'

import {
    
} from 'react-redux'

//Components

import LinearScaleIcon from '@mui/icons-material/LinearScale';
//MUI
import {
    Box,
} from '@mui/material'
import { styled } from '@mui/system'

//propTypes 
import propTypes from 'prop-types'
import AdminMainButton from './AdminMainButton/AdminMainButton'
import NearCitiesPopover from './NearCitiesPopover'

//Styled Components
const StyledNearCities = styled(Box)(
    ({ theme }) => ({
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
    })
)


const NearCities = ({cityId}) => {
    return (
        <StyledNearCities>
            <AdminMainButton
                title="Near Cities"
                type='modal'
                appearance='primary'
                icon={<LinearScaleIcon />}
                putBorder
                willShow={
                    <NearCitiesPopover cityId={cityId} />
                }
            />
        </StyledNearCities>
    );
};

NearCities.propTypes = {
    cityId: propTypes.number
}

export default NearCities;