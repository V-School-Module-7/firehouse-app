// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const timestampSchema = new Schema ({
//     // Fire Categories

//     // I want see a timestamp model that tracks the logged in user, checklist item, and date and time stamp in a model

//     //Primary All Clear
//     //Secondary All Clear
//     //Under Control
//     //Loss Stop

//     primaryAllClear: {
//         type: Date,
//         default: Date.now()
//     },
//     secondaryAllClear: {
//         type: Date,
//         default: Date.now()
//     },
//     underControl: {
//         type: Date,
//         default: Date.now()
//     },
//     lossStop: {
//         type: Date,
//         default: Date.now()
//     },
//     // timestamps: {
//     //     type: Date,
//     //     default: Date.now()
//     // },
//     //relate this to user
//     // user: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: "User",
//     //     required: true
//     // }
// });

// module.exports = mongoose.model('Timestamp', timestampSchema);