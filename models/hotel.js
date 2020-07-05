const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
	hotel_name: String,
	data_checkin: String,
	data_checkout: String,
	qtd_pessoas: String,
	user: { type: Schema.Types.ObjectId, ref: 'user' },
});

mongoose.model('hotel', hotelSchema);
