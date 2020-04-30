const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const  medicalSchema = new Schema ({
    medications: {
        type: String,
        enum: [ adenosine, albuterol, amiodarone, aspirin, ativan, atropine, benadryl, bipapCpap, calciumGluconate, dextrose, epinepherine, fentanyl, glucagon, haldol, ketamine, lidocaine, magnesiumSulfate, midazolam, morphineSulfate, motrin, naloxone, nitroglycerin, norepinephrine, normalSaline, oralDextrose, oxytocin, phenergan, procainamide, sodiumBicarbonate, synchronizedCardioversion, tcp, tylenol, valium, zofran ],
        required: true
    },
    weights: {
        type: String,
        required: true
    },
    amounts: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Medical", medicalSchema);
