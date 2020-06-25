import axios from 'axios';

const apiFlight = axios.create({
	url: 'https://hotels4.p.rapidapi.com/locations/search',
	headers: {
		'content-type': 'application/octet-stream',
		'x-rapidapi-host': 'hotels4.p.rapidapi.com',
		'x-rapidapi-key': '0bdd73a0bamsh21165a979cefe35p1f8757jsn91ce57cf4a10',
		useQueryString: true,
	},
	params: {
		locale: 'en_US',
		query: 'new york',
	},
});

export default apiFlight;
