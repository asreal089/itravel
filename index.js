const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClienteID,
			clientSecret: keys.googleClienteSecret,
			callbackURL: '/auth/callback',
		},
		(accessToken) => {
			console.log(accessToken);
		}
	)
);

app.get('/', (req, res) => {
	res.send({ olarr: 'mundo' });
});

app.get(
	'/auth',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 8585;
app.listen(PORT);
console.log('aplicação de pé na porta: ' + PORT);
