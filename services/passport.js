const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const moogose = require('mongoose');

const User = moogose.model('user');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClienteID,
			clientSecret: keys.googleClienteSecret,
			callbackURL: '/auth/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('access token: ', accessToken);
			console.log('refresh token: ', refreshToken);
			console.log('profile: ', profile);
			new User({
				googleId: profile.id,
			}).save();
		}
	)
);
