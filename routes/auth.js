const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Household = require('../models/Household')


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


//Sign up household

router.post('/signupHousehold', (req, res, next) => {
	const { name, username, pin } = req.body;
	if (pin.length > 4 && pin.length < 4) {
		return res.status(400).json({ message: 'Your pin has to be 4 chars' });
	}
	if (username === '') {
		return res.status(400).json({ message: 'Your household user name cannot be empty' });
	}
	if (name === '') {
		return res.status(400).json({ message: 'Your name cannot be empty' });
	}

	Household.findOne({ username: username })
		.then(userFromDB => {
			if (userFromDB !== null) {
				return res.status(400).json({ message: 'This username is already taken' });
			} else {
				//User.findOne(req.session.user)
				//.then()
				//const salt = bcrypt.genSaltSync();
				//const hash = bcrypt.hashSync(pin, salt);

				Household.create({name: name, username: username, pin: pin})
					.then(createdHousehold => {
						let members = createdHousehold.members;
						members.push(req.session.user._id);
						Household.findByIdAndUpdate(createdHousehold._id, {members: members})
						.then(haustemp => {
							console.log(haustemp);
							let household = req.session.user.household;
							household = haustemp._id;
							User.findByIdAndUpdate(req.session.user._id, {household:household}, {new:true}) 
							.then(final_user => {
								console.log(final_user, "final user tag")
								console.log(req.session.user, "session user tag")
								return res.status(200).json(haustemp);
							})

							
						})
				


						// console.log(createdHousehold, "this is the first console log")
						// const household = createdHousehold._id;
						// console.log(createdHousehold._id, "id for household");
						// console.log(req.session.user._id)
						// Household.findByIdAndUpdate(createHousehold._id, {"$push": {"members": req.session.user._id}}, {new:true})
						// .then((createdHouse) => {
						// 	console.log(createdHouse, "after adding")
						// }
						// ).catch(
						// 	(error)=>console.log(error)
						// )
						// User.findByIdAndUpdate(req.session.user._id, {household: household}, {new:true})
						// .then(() => {
						// 	//loggedUser.household = createdHousehold._id;
						// 	//createdHousehold.members.push(loggedUser._id);
						// 	return res.status(200).json(createdHousehold);
						// })
					})
					.catch(err => {
						res.json(err);
					})
			}
		})
});

router.post('/loginHousehold', (req, res, next) => {
	
	const { name, username, pin } = req.body;
	Household.findOne({ username: username })
		.then(loggedHousehold => {

			if (loggedHousehold === null) {
				return res.status(500).json({ message: 'Error while logging in' });
			}
			if (bcrypt.compareSync(pin, loggedHousehold.pin)) {
				//req.session.user = userFromDB;
				//return res.status(200).json(loggedHousehold);
				let userNow = req.session.user._id;
				User.findById(userNow)
				.then(user =>{
					user.household = loggedHousehold._id;
					loggedHousehold.members.push(user._id);
					return res.status(200).json(loggedHousehold)
				})
			} else {
				return res.status(500).json({ message: 'Error while logging in' });
			}
		})
});


module.exports = router;