const Household = require("../models/Household");
const User = require("../models/User");
const router = require("express").Router();

router.get('/', (req, res, next) => {
    Household.findById(req.session.user.household)
        .then(household => {
            res.status(200).json(household);
        })
        .catch(err => {
            next(err)
        })
});

router.put('/profile', (req, res, next) => {
    const {name, email} = req.body;
    User.findByIdAndUpdate(req.session.user._id, {name, email}, {new: true})
        .then(user => {
            req.session.user = user;
            res.status(200).json(user);
        })

        .catch(err => {
            next(err);
        })
})

router.get('/user', (req, res, next) => {
    User.findById(req.session.user._id)
        .then(user => {
            res.status(200).json(user)
        })

        .catch(err => {
            next(err)
        })
})


module.exports = router;
