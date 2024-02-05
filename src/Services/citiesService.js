// src/services/geoDbService.js
import axios from 'axios';
import config from "../../config.json"
const API_KEY = config.api_key;
const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1';

const geoDbServiceApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
});

export const getCityFromCoordinates = async (latitude, longitude) => {
    try {
        const location = `${latitude >= 0 ? '+' : '-'}${Math.abs(latitude).toFixed(7)}${longitude >= 0 ? '+' : '-'}${Math.abs(longitude).toFixed(7)}`;
        const response = await geoDbServiceApi.get('/geo/cities', {
            params: {
            location: location,
            },
        });
        return response.data.data[0];
        } catch (error) {
        console.error('Error fetching city from coordinates:', error);
        throw error;
    }
  };

export const getCities = async (searchTerm) => {
    try {
        const response = await geoDbServiceApi.get('/geo/cities', {
        params: {
            namePrefix: searchTerm,
            limit: 10,
        },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

export const getCity = async (cityId) => {
    try {
        const response = await geoDbServiceApi.get('/geo/cities/'+cityId)
        return response.data.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

export const getCityTime = async (cityId) => {
    try {
        const response = await geoDbServiceApi.get('/geo/cities/'+cityId+'/dateTime', {
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

export const getCitiesNearCity = async(cityId) => {
    try {
        const response = await geoDbServiceApi.get('/geo/cities/'+cityId+'/nearbyCities', {
            radius: 500,
            limit: 15,
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching near cities:', error);
        throw error;
    }
}

export const getCurrentCountry = async () => {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                    const { latitude, longitude } = position.coords;
                    const city = await getCityFromCoordinates(latitude, longitude);
                    return city.country;
                    
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    return {error: error.message}
                },
            );
        } else {
            console.error('Geolocation is not supported by your browser');
            return {error: "Geolocation is not supported by your browser"}
        }
}

const geoDbService = {
    getCities,
    getCityFromCoordinates,
    getCity,
    getCityTime,
    getCitiesNearCity,
    getCurrentCountry
}

export default geoDbService;
