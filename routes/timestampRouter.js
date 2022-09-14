// const express = require('express');
// const timestampRouter = express.Router();
// const Timestamp = require('../models/timestamp');

// timestampRouter
// .route('/')
// .get((req, res, next) => {
//     Timestamp.find((err, time) =>{
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(time);
//     });
// })

// .post(((req, res, next) =>{
//     const newTimestamp = new Timestamp(req.body);
//     newTimestamp.save((err, time) =>{
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(time);
//     });
// }));

// module.exports = timestampRouter;