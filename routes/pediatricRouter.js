const express = require('express');
const pediatricRouter = express.Router();
const Pediatric = require('../models/pediatric.js')

pediatricRouter //get all pediatric data
    .route("/")
    .get((req, res, next) => {
        Pediatric.find((err, doses) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(doses)
        });
    })

    .post((req, res, next) => {
        console.log(req.body)
        const newPediatric = new Pediatric(req.body);
        newPediatric.save((err, dose) => {
            if (err) {
                res.status(500);
                return next(er)
            }
            return res.status(200).send(dose);
        });
    });
    
    pediatricRouter
        .route('/:_id')
        .get((req, res, next) => {
            Pediatric.findById(req.params._id, (err, data) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                return res.status(200).send(data)
            })
        })


    module.exports = pediatricRouter