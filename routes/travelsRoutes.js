const mongoose = require('mongoose');
const requireLogin = require('../middlewere/requireLogin');
const { json } = require('express');

const Hotel = mongoose.model('hotel');
const Flight = mongoose.model('flight');
module.exports = (app) => {
	app.post('/hotel', requireLogin, (req, res) => {
		const {
			hotel_name,
			data_checkin,
			data_checkout,
			qtd_pessoas,
		} = req.body;

		const hotel = new Hotel({
			hotel_name,
			data_checkin,
			data_checkout,
			qtd_pessoas,
			_user: req.user.id,
		});
	});

	app.post('/flight', requireLogin, (req, res) => {
		const { qtd_pessoas, origem, destino, data_ida, hora_saida } = req.body;

		const flight = new Flight({
			qtd_pessoas,
			origem,
			destino,
			data_ida,
			hora_saida,
			_user: req.user.id,
		});
	});

	app.get('/hotel', requireLogin, (req, res) => {
		const hotel = Hotel.find({ _user: req.user.id });
		console.log(hotel);
		res.send(hotel);
	});

	app.get('/flight', requireLogin, (req, res) => {
		const flight = Flight.find({ _user: req.user.id });
		console.log(hotel);
		res.send(flight);
	});
};
