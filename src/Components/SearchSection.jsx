//React
import { useEffect, useState } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Box, IconButton, InputAdornment, TextField,
} from '@mui/material'
import { styled } from '@mui/system'

//icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

//propTypes 
import propTypes from 'prop-types'
import geoDbService from '../Services/citiesService';

//Styled Components
const StyledSearchSection = styled(Box)(
    ({theme}) => ({
        width: '100%',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "56px",
        transition: theme.transitions.create(["border-color"], {
            duration: theme.transitions.duration.standard
        }),
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
            },
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary": {
                borderColor: "white",
            },
        }
    })
)

const StyledTextField = styled(TextField)(
    ({theme}) => ({
        // "&:active": {
        //     border: "none"
        // },
        "& .MuiOutlinedInput-notchedOutline": {
            // border: "",
            borderRadius: `${theme.spacing(2)}`,
        }
    })
);

const SearchSection = ({
    state,
    getFunc,
}) => {

    const {setState} = state;
    const [searchTermValue, setSearchTermValue] = useState("")
    const [citySearchTerm, setCitySearchTerm] = useState("")
    // every time search term changes, cities data will be updated
    useEffect(()=> {
        const fetchCities = async () => {
            try {
                const cities = await getFunc(citySearchTerm);
                // Update the state with the cities data
                setState(cities);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
    
        // Call the async function
        fetchCities();
    }, [citySearchTerm, getFunc, setState])

    const handleChange = (e) => {
        const value = e.target.value
        setSearchTermValue(()=> value)
    }

    const handleSearch = (e) => {
        if(e.key === "Enter") {
            const value = e.target.value;
            setCitySearchTerm(()=> value)
        }
    }
    
    const handleClickSearch = () => {
            setCitySearchTerm(()=> searchTermValue)
    }
    return (
        <StyledSearchSection>
            <StyledTextField
            fullWidth
            label="Search City..."
            name='citySearchTerm'
            value={searchTermValue}
            onChange={handleChange}
            onKeyDown={handleSearch}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={handleClickSearch} color='primary' >
                            <SearchOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            />
            
        </StyledSearchSection>
    );
};

SearchSection.propTypes = {
    state: propTypes.object,
    getFunc: propTypes.func,
}

export default SearchSection;