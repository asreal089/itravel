import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_HOTEL } from './types';

export const fetchUser = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHotel = () => async (dispatch) => {
	var res = await null; /* await axios({
		method: 'GET',
		url: 'https://tripadvisor1.p.rapidapi.com/hotels/list',
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
			'x-rapidapi-key':
				'0bdd73a0bamsh21165a979cefe35p1f8757jsn91ce57cf4a10',
			useQueryString: true,
		},
		params: {
			offset: '0',
			currency: 'USD',
			limit: '10',
			order: 'asc',
			lang: 'en_US',
			sort: 'recommended',
			location_id: '293919',
			adults: '1',
			checkin: '<required>',
			rooms: '1',
			nights: '2',
		},
	});*/
	console.log(res);
	return null; //dispatch({ type: FETCH_HOTEL, payload: res.data });
};

export const fetchFlight = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAtraction = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};
