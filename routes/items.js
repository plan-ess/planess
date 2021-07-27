const Household = require("../models/Household");
const Item = require("../models/Item");
const router = require("express").Router();

router.get('/', (req, res, next) => {
    Household.findById(req.session.user.household)
        .populate('basket')
        .then(household => {
            res.status(200).json(household);
        })

        .catch(err => {
            next(err)
        })
});

router.get('/:id', (req, res, next) => {
    Item.findById(req.params.id)
        .then(item => {
            if (!item) {
                res.status(404).json(item);
            } else {
                res.status(200).json(item);
            }
        })

        .catch(err => {
            next(err);
        })
})

router.post("/", (req, res, next) => {
    const {name, quantity, quantityType, addedBy} = req.body;
    Item.create({
        name,
        quantity,
        quantityType,
        addedBy
    })
        .then(item => {
            Household.findById(req.session.user.household)
                .then(household => {
                    basket = household.basket
                    basket.push(item)

                    Household.findByIdAndUpdate(household._id, {basket: basket})
                        .then(() => {
                            res.status(201).json(item);
                        })

                        .catch(err => {
                            next(err);
                        })
                })

                .catch(err => {
                    next(err);
                })
        })

        .catch(err => {
            next(err)
        })
//   res.json("All good in here");
});

router.put('/:id', (req, res, next) => {
    const {name, quantity, quantityType} = req.body;
    Item.findByIdAndUpdate(req.params.id, { name, quantity, quantityType }, {new: true})
        .then(item => {
            res.status(200).json(item);
        })

        .catch(err => {
            next(err);
        })
})

router.delete('/:id', (req, res, next) => {
    Item.findByIdAndDelete(req.params.id)
      .then(deletedItem => {
        Household.findById(req.session.user.household)
            .then(household => {
                let basket = household.basket;
                basket.splice(basket.indexOf(deletedItem._id), 1);

                Household.findByIdAndUpdate(household._id, {basket: basket})
                    .then(() =>{
                        res.status(200).json({ message: 'item deleted' });
                    })
                    .catch(err =>{
                        next(err);
                    })
            })
            .catch(err => {
                next(err);
            })
      })
      .catch(err => {
        next(err);
      })
  });

module.exports = router;