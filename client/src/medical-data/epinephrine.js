module.exports = {
    type: "Epinephrine",
    conditions: [
        {
            type: "1:1000 bradycardia/hypoperfusion/snake bites",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "2-10 mcg/min IV/IO infusion for hypoperfusion",
                    notes: [
                        "ADULT: titrate to maintain a SBP>100 mmHg"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.1-2 mcg/kg/min IV/IO infusion for hypoperfusion",
                    notes: [
                        "PEDIATRIC: Titrate to maintain a SBP>70 + (age in years * 2) mmHg"
                    ]
                }
            ]
        },
        {
            type: "1:1000 anaphalaxis",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "0.3 cc IM",
                    notes: [
                        "If symptoms persist, may repeat every 10 min until symptoms improve"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.15 cc IM",
                    notes: [
                        "if symptoms persist, may repeat every 10 min until symptoms improve"
                    ]
                }
            ]
        },
        {
            type: "1:1000 anaphalaxis/stridor Drug Concentration 1mg in 1 mL",
            weights: [
                {
                    amounts: "Adult",
                    dosage: [
                        "2 mL mixed with 3 mL of Normal Saline via nebulizer every 10 min until symptoms improve"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: [
                        "2 mL mixed with 3 mL of Normal Saline via nebulizer every 10 min until symptoms improve"
                    ]
                }
            ]
        },
        {
            type: "1:10,000 Cardiac Arrest - Drug Concentration 1mg in 10 mL",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "1mg (0.1 mg/kg IV/IO) Adult Dose: 1mg/10mL",
                    notes: [

                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.01 mg/kg (0.1mL/kg IV/IO)",
                    notes: [

                    ]
                },
                {
                    amounts: "Newborn Resuscitation",
                    dosage: "0.01-0.03 mg/kg (0.1-0.3 mL/kg IV/IO)",
                    notes: [
                        "for HR <60/min despite 30 secongs of effective CPR with PPV"
                    ]
                },
                {
                    amounts: "3.5 kg",
                    dosage: "0.035mg / 0.35 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "5 kg",
                    dosage: "0.05mg / 0.5 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "8.2 kg",
                    dosage: "0.08mg / 0.82 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "10.5 kg",
                    dosage: "0.11mg / 1.05 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "13 kg",
                    dosage: "0.13mg / 1.30 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "16 kg",
                    dosage: "0.16mg / 1.6 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "19 kg",
                    dosage: "0.19mg / 1.9 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "22 kg",
                    dosage: "0.22mg / 2.20 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "26 kg",
                    dosage: "0.26mg / 2.6 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "28 kg",
                    dosage: "0.28mg / 2.8 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "32 kg",
                    dosage: "0.32mg / 3.2 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "34 kg",
                    dosage: "0.34mg / 3.4 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "36 kg",
                    dosage: "0.36mg / 3.6 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "37 kg",
                    dosage: "0.37mg / 3.7 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "39 kg",
                    dosage: "0.39mg / 3.9 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "41 kg",
                    dosage: "0.41mg / 4.1 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "47 kg",
                    dosage: "0.47mg / 4.7 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "52 kg",
                    dosage: "0.52mg / 5.2 mL",
                    notes: [

                    ]
                }
            ]
        },
        {
            type: "1:10,000 anaphalactic shock/hypotension",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "1 mg IV/IO for sever hypotension",
                    notes: [
                        "May repeat every 5 min if shock persists"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.01 mg/kg (0.1 mL/kg) IV/IO for sever hypotension",
                    notes: [
                        "May repeat every 5 min if shock persists"
                    ]
                },
                {
                    amounts: "3.5 kg",
                    dosage: "0.035mg / 0.35 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "5 kg",
                    dosage: "0.05mg / 0.5 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "8.2 kg",
                    dosage: "0.08mg / 0.82 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "10.5 kg",
                    dosage: "0.11mg / 1.05 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "13 kg",
                    dosage: "0.13mg / 1.30 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "16 kg",
                    dosage: "0.16mg / 1.6 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "19 kg",
                    dosage: "0.19mg / 1.9 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "22 kg",
                    dosage: "0.22mg / 2.20 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "26 kg",
                    dosage: "0.26mg / 2.6 mL"
                },
                {
                    amounts: "28 kg",
                    dosage: "0.28mg / 2.8 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "32 kg",
                    dosage: "0.32mg / 3.2 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "34 kg",
                    dosage: "0.34mg / 3.4 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "36 kg",
                    dosage: "0.36mg / 3.6 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "37 kg",
                    dosage: "0.37mg / 3.7 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "39 kg",
                    dosage: "0.39mg / 3.9 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "41 kg",
                    dosage: "0.41mg / 4.1 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "47 kg",
                    dosage: "0.47mg / 4.7 mL",
                    notes: [

                    ]
                },
                {
                    amounts: "52 kg",
                    dosage: "0.52mg / 5.2 mL",
                    notes: [

                    ]
                }
            ]
        },
        {
            type: "1:10,000 beta blocker toxicity - bradycardia",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "0.1 mg (1cc of 1:10,000) IV/IO push",
                    notes: [

                    ]
                },
                {
                    amount: "Pediatric",
                    dosage: "0.1 mg (1cc of 1:10,000) IV/IO push",
                    notes: [
                        "For Bradycardia/Hypotension unresponsive to Atropine",
                        "Repeat every 3-5 min as needed to maintain SBP"
                    ]
                },

            ]
        }
    ]
}