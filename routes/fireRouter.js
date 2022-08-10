const express = require('express');
const fireRouter = express.Router();
const Fire = require('../models/fire');

fireRouter
.route('/')
.get((req, res, next) => {
    Fire.find((err, fires) =>{
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(fires);
    });
})

.post(((req, res, next) =>{
    const newFire = new Fire(req.body);
    newFire.save((err, fire) =>{
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(fire);
    });
}));

fireRouter
.route('/category/:category')
.get((req, res, next) => {

    Fire.find({ category: req.params.category}, (err, fires) =>{
        console.log(fires)
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(fires);
    });
});

fireRouter
    .route('/building/:building')
    .get((req, res, next) => {

        Fire.find({
            building: req.params.category
        }, (err, fires) => {
            console.log(fires)
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(fires);
        });
    });


fireRouter
.route('/:_id')
.get((req, res, next) => {
    Fire.findById(req.params._id, (err, fire) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(fire);
    });
});

module.exports = fireRouter;