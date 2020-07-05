const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireLogin = require('../middlewere/requireLogin');
const { json, response } = require('express');
const Hotel = mongoose.model('hotel');
const Flight = mongoose.model('flight');

module.exports = (app) => {
	app.use(bodyParser.json());
	app.post('/api/hotel', requireLogin, (req, res) => {
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
			user: req.user.id,
		}).save();
	});

	app.post('/api/flight', requireLogin, (req, res) => {
		const { qtd_pessoas, origem, destino, data_ida, hora_saida } = req.body;

		const flight = new Flight({
			qtd_pessoas,
			origem,
			destino,
			data_ida,
			hora_saida,
			user: req.user.id,
		}).save();
	});

	app.get('/api/hotel', requireLogin, (req, res) => {
		console.log('chega aqui');
		var hotelState = Hotel.find({
			user: req.user.id,
		});
		response = JSON.stringify(hotelState);
		res.send(response);
	});

	app.get('/api/flight', requireLogin, (req, res) => {
		const flight = Flight.findOne({ user: req.user.id });
		console.log(hotel);
		res.send(flight);
	});
};
