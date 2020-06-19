const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/auth',
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	app.get('/auth/callback', passport.authenticate('google'));
};
