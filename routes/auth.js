const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res, next) => {
	const { name, email, password } = req.body;
	if (password.length < 8) {
		return res.status(400).json({ message: 'Your password has to be 8 chars min' });
	}
	if (email === '') {
		return res.status(400).json({ message: 'Your email cannot be empty' });
	}
	if (name === '') {
		return res.status(400).json({ message: 'Your name cannot be empty' });
	}

	User.findOne({ email: email })
		.then(userFromDB => {
			if (userFromDB !== null) {
				return res.status(400).json({ message: 'This username is already taken' });
			} else {
				const salt = bcrypt.genSaltSync();
				const hash = bcrypt.hashSync(password, salt);

				User.create({name: name, email: email, password: hash })
					.then(createdUser => {
						req.session.user = createdUser; 
						return res.status(200).json(createdUser);
					})
					.catch(err => {
						res.json(err);
					})
			}
		})
});

router.post('/login', (req, res, next) => {
	
	const { name, email, password } = req.body;
	User.findOne({ email: email })
		.then(userFromDB => {
			if (userFromDB === null) {
				return res.status(500).json({ message: 'Error while logging in' });
			}
			if (bcrypt.compareSync(password, userFromDB.password)) {
				req.session.user = userFromDB;
				return res.status(200).json(userFromDB);
			} else {
				return res.status(500).json({ message: 'Error while logging in' });
			}
		})
});


router.get('/loggedin', (req, res) => {
	console.log('this is the user from the session: ', req.session.user);
	res.json(req.session.user);
})

router.delete('/logout', (req, res) => {
	req.session.destroy()
	res.status(200).json({ message: 'Successful Logout' });
})

module.exports = router;