import { FETCH_HOTEL } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case FETCH_HOTEL:
			return action.payload || false;
		default:
			return state;
	}
}
