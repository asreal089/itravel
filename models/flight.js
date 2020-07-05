const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema({
	qtd_pessoas: String,
	origem: String,
	destino: String,
	data_ida: String,
	hora_saida: String,
	user: { type: Schema.Types.ObjectId, ref: 'user' },
});

mongoose.model('flight', flightSchema);
