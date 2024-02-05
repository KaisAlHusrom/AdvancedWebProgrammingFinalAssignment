import axios from 'axios';

import config from "../../config.json"
const API_KEY = config.weather_api_key;
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const weatherServiceAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "Age": "0",
        "x-weatherapi-qpm-left": "5000001",
        "CDN-ProxyVer": "1.04",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "01/25/2024 14:23:38",
        "CDN-EdgeStorageId": "863",
        "CDN-Status": "200",
        "CDN-RequestId": "d6502c59530348dc7a244a3aa2c23aa4",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Thu, 25 Jan 2024 14:23:38 GMT",
        "Server": "BunnyCDN-DE1-863",
        "Via": "1.1 varnish (Varnish/6.0)"
    },
});

export const getCityWeather = async (cityName) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`);
        console.log(response);
        // Check if the status code is 400 and return the data
        if (response.status === 400) {
            console.log('Bad Request:', response.data);
            return response.data;
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching Weather:', error);
        return error.response.data;
    }
};

export const getFiveDaysWeather = async (lat, lon) => {
    try {
        const response = await weatherServiceAPI.get("city/fivedaysforcast/" + lat + "/"+lon);
        return response.data;
    } catch (error) {
        console.error('Error fetching Weather:', error);
        throw error;
    }
};

const weatherService = {
    getCityWeather
}

export default weatherService;
