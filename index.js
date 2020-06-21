const express = require('express');
const moongose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');

const app = express();

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
moongose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 8585;
app.listen(PORT);
console.log('aplicação de pé na porta: ' + PORT);
