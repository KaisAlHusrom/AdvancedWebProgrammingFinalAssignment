//React
import { useContext, useState } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Box, Fade, Grid, Typography,
} from '@mui/material'
import { styled } from '@mui/system'

//propTypes 
import propTypes from 'prop-types'
import LocationSection from './LocationSection'
import SearchSection from './SearchSection'
import CityCard from './CityCard'
import { ScreenSizeContext } from '../App'


//Styled Components
const StyledContentComponent = styled(Box)(
    () => ({
    
    })
)


const ContentComponent = (props) => {
    const {
        title,
        getFunc,
        weatherFunc,
        detailsFunc,
        timeFunc,
        nearFunc,
    } = props

    const {screenSize} = useContext(ScreenSizeContext)

    const [state, setState] = useState([]);
    
    return (
        <StyledContentComponent>
            <LocationSection 
            functions={{
                weatherFunc,
                detailsFunc,
                nearFunc,
                timeFunc,
            }} 
            />
            <SearchSection
            state={{setState, state}}
            getFunc={getFunc}
            />
            {
                state && state.length > 0
                ?
                (
                    <Fade in={state !== null}>
                        <Grid container spacing={2}>
                            {
                                state.map((city, i) => {
                                    return (
                                        <Grid item key={i} xs={screenSize === "sm" ? 12 : screenSize === "lg" ? "4" : "6"}>
                                            <CityCard
                                            key={i} 
                                            city={city} 
                                            functions={
                                                {
                                                    weatherFunc,
                                                    detailsFunc,
                                                    nearFunc,
                                                    timeFunc
                                            }
                                            }
                                            />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Fade>
                )
                : 
                !state || state?.length === 0
                ?
                (
                    <Typography color="warning.main" variant='subtitle1'>No Found {title}</Typography>
                )
                : null
            }
        </StyledContentComponent>
    );
};

ContentComponent.propTypes = {
    title: propTypes.string,
    getFunc: propTypes.func,
    weatherFunc: propTypes.func,
    detailsFunc: propTypes.func,
    timeFunc: propTypes.func,
    nearFunc: propTypes.func
}

export default ContentComponent;