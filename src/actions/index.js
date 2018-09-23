import axios from 'axios';


const API_KEY = '8be2f6c2f04959669a3f0175ab9eac7e';
const ROOT_UTL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_UTL}&q=${city},IR`;
    const request = axios.get(url);

    // console.log('Request:', request);
    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}