const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const moogose = require('mongoose');

const User = moogose.model('user');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClienteID,
			clientSecret: keys.googleClienteSecret,
			callbackURL: '/auth/callback',
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({
						googleId: profile.id,
						nome: profile._json.name,
						email: profile._json.email,
					})
						.save()
						.then((user) => done(null, user));
				}
			});
		}
	)
);
