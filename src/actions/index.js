import axios from 'axios';

const API_KEY = '6410a6b3f172d36295d9e6087f2cf72f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

//Remember action creators always have to return an action and action is an object which always has to have a type property
//Axios is a library that is solid made for making Ajax requests from the browser.  https://github.com/axios/axios
//Remember the payload is an optional property that goes along with actions that can contain some additional data that describes this particular action.