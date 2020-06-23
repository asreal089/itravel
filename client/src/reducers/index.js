import { combineReducers } from 'redux';
import authReducer from './authReducer';
import hotelReducer from './hotelReducer';

export default combineReducers({
	auth: authReducer,
	hotel: hotelReducer,
});
