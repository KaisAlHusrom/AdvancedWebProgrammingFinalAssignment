//React
import { useContext, useEffect, useMemo, useRef, useState } from 'react'

import {
    
} from 'react-redux'

//Components


//MUI
import {
    Autocomplete,
    Box,
    TextField,
    Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { convertCurrency, getCurrencyFromCountryName } from '../../Services/currencyService'

//countries
import countriesName from "../../Helpers/countriesName.json"
import AdminMainButton from '../../Components/AdminMainButton/AdminMainButton';
import { ScreenSizeContext } from '../../App';

//Styled Components


const StyledSelectCurrency = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(3),
    })
);

const StyledSelectCurrencyItem = styled(Box)(
    () => ({
        display: "flex",
        alignItems: "center",
    })
);

const StyledLabel = styled(Box)(
    () => ({
        minWidth: "60px"
    })
);

const ChartBox = styled(Box)(
    () => ({
        // Your styles here
    })
);

const CurrenciesPage = () => {
    const isInitialRender = useRef(true);
    
    const [fromAmount, setFromAmount] = useState(1);
    const [fromCountry, setFromCountry] = useState("Turkey")
    
    const [fromCurrency, setFromCurrency] = useState('TRY')


    //Get Currency
    useEffect(() => {
        
    }, [])


    //change from currency when from country change
    useEffect(() => {
        // Skip the first render
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        const setCurrency = async () => {
            try {
                    const currency = await getCurrencyFromCountryName(fromCountry)
                    setFromCurrency(() => currency)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        setCurrency()
    }, [fromCountry])

    const [toAmount, setToAmount] = useState(1);
    const [toCountry, setToCountry] = useState("United States")

    const [toCurrency, setToCurrency] = useState("USD")
    //change to currency when to country change
    useEffect(() => {
        // Skip the first render
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        const setCurrency = async () => {
            try {
                    const currency = await getCurrencyFromCountryName(toCountry)
                    setToCurrency(() => currency)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        setCurrency()
    }, [toCountry])

    //month days currencies values


    //handlers
    const handleChangeFromAmount = (e) => {
        setFromAmount(() => e.target.value)
        
    }
    const handleChangeFromCountry = (event, value) => {
        setFromCountry(()=> value);
    };

    const handleChangeToAmount = (e) => {
        setToAmount(() => e.target.value)
        
    }
    const handleChangeToCountry = (event, value) => {
        setToCountry(() => value);
    };
    
    const handleConvertCurrency = async () => {
        try {
            const res = await convertCurrency(fromCurrency, toCurrency, fromAmount)
            setToAmount(() => res.result)
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const {screenSize} = useContext(ScreenSizeContext)
    const StyledCountriesPage = useMemo(() => {
        return styled(Box)(
            ({ theme }) => ({
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: theme.spacing(2),
                flexDirection: screenSize === "sm" ? "column" : "row"
            })
        )
    }, [screenSize])


    return (
        <StyledCountriesPage>
            <StyledSelectCurrency>
                <StyledSelectCurrencyItem>
                    <StyledLabel>
                        <Typography variant='h7' sx={{marginRight: "10px"}}>From: </Typography>
                    </StyledLabel>
                    <TextField
                        value={fromAmount}
                        onChange={handleChangeFromAmount}
                        size='small'
                        sx={{
                            width: "150px",
                            marginRight: "10px",
                        }}
                        InputProps={{
                            endAdornment: (
                                <>
                                    {fromCurrency && `${fromCurrency}`}
                                </>
                            )
                        }}
                    />

                    <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"
                        options={countriesName.countries}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField  {...params} />}
                        value={fromCountry}
                        onChange={handleChangeFromCountry}
                    />
                </StyledSelectCurrencyItem>
                <StyledSelectCurrencyItem>
                    <StyledLabel>
                    <Typography variant='h7' sx={{marginRight: "10px"}}>To: </Typography>
                    </StyledLabel>
                    <TextField
                        value={toAmount}
                        onChange={handleChangeToAmount}
                        size='small'
                        sx={{
                            width: "150px",
                            marginRight: "10px",
                        }}
                        InputProps={{
                            endAdornment: (
                                <>
                                    {toCurrency && `${toCurrency}`}
                                </>
                            )
                        }}
                        disabled
                    />

                    <Autocomplete
                        size='small'
                        disablePortal
                        id="combo-box-demo"
                        options={countriesName.countries}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField  {...params} />}
                        value={toCountry}
                        onChange={handleChangeToCountry}
                        
                    />
                </StyledSelectCurrencyItem>
            </StyledSelectCurrency>
            <ChartBox>
            {/* <LineChart
                    xAxis={[
                        {
                            data: currentMonthCurrencyAmount && Object.keys(currentMonthCurrencyAmount).length > 0 ? Object.keys(currentMonthCurrencyAmount) : [1, 2, 3, 4, 5, 6, 7],
                            id: "Days",
                            // scaleType: "time",
                            // valueFormatter: data => currentMonthCurrencyAmount && Object.keys(currentMonthCurrencyAmount).length > 0 ? new Date(data).getDate() : data
                        }
                    ]}
                    series={[
                        {
                            data: Object.values(currentMonthCurrencyAmount),
                            area: true,
                        },
                    ]}
                    width={500}
                    height={300}
                /> */}
                <AdminMainButton
                type='custom'
                appearance='primary'
                title='convert'
                onClick={handleConvertCurrency}
                filled
                />
            </ChartBox>
        </StyledCountriesPage>
    );
};

export default CurrenciesPage;