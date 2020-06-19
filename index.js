const express = require('express');
const moongose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);
moongose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get('/', (req, res) => {
	res.send({ olarr: 'mundo' });
});

const PORT = process.env.PORT || 8585;
app.listen(PORT);
console.log('aplicação de pé na porta: ' + PORT);
