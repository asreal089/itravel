import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_HOTEL } from './types';

export const fetchUser = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHotel = (data) => async (dispatch) => {
	var res = null;

	return dispatch({ type: FETCH_HOTEL, payload: res });
};

export const fetchFlight = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAtraction = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};
