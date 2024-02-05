// src/services/geoDbService.js
import axios from 'axios';

import config from "../../config.json"
const API_KEY = config.api_key;
const BASE_URL = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com';

const currencyApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    },
});

export const getCurrencyFromCountryName = async (countryName) => {
    try {
        const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
        params: {
            namePrefix: countryName,
            limit: 1,
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        }
        });
        return response.data.data[0].currencyCodes[0];
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
}



export const convertCurrencyWithTimeSeries = async (from, to, startDate, endDate, amount) => {
    try {
        const response = await currencyApi.get('/timeseries', {
        params: {
            start_date: startDate,
            end_date: endDate,
            from: from,
            to: to,
            amount: amount,
        },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching currency history:', error);
        throw error;
    }
}

export const convertCurrency = async (from, to, amount) => {
    try {
        const response = await currencyApi.get('/convert', {
        params: {
            from: from,
            to: to,
            amount: amount,
        },
        });
        return response.data;
    } catch (error) {
        console.error('Error convert currency', error);
        throw error;
    }
}