const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const pediatricSchema = new Schema({
    vitalSigns: {
    heartRate: String,
    bloodPressure: String,
    respiratoryRate: String,
    tidalVolume: String,
    urineOutput: String
    },
    airwayEquipment: {
        ETTubeCuffed: String,
        cuffedInsertionLength: String,
        ETTubeUncuffed: String,
        uncuffedInsertionLength: String,
        Laryngoscope: String,
        BVM: String,
        oxygenMask: String,
        NPAirway: String,
        LMA: String,
        NGOG: String,
    },
    defibrillation: {
        defib1stDose: String,
        defib2ndDose: String,
        defibSubDose: String
    },
    cardioversion: {
        cardioversion1stDose: String,
        cardioversionSubDose: String,
        adenosine1stDose: String,
        adenosine2ndDose: String,
        amidarone: String,
        Procainamide: String,
        calciumChloride: String,
        MagnesiumSulfate: String
    },
    Anaphylaxis: {
        diphenhydramine: String,
        epinephrineIMSC: String,
        epinephrineIV: String,

    },
    hypoglycemia: {
        mgDL: String,
        D10IV: String,
        D50IV: String,
        glucagonIMSCIVL: String

    }
})



module.exports = mongoose.model("Pediatric", pediatricSchema);
