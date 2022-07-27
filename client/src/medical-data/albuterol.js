module.exports = {
    type: "Albuterol",
    conditions: [
        {
            type: "Wheezing/Asthma/Anaphylaxis/Drowning/Submersion",
            weights: [
                {
                    amount: "adult",
                    dosage: "2.5mg every 10 min via nebulation for bronchospasm/wheezing until symptoms subside",
                    notes: [
                        ""
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "2.5mg every 10 min via nebulation until symptoms subside",
                    notes: [
                        "Start with 1.25mg if patient is < 1 year in age.",
                    ]
                }
            ]
        },
        {
            type: "Respiratory Distress",
            weights: [
                {
                    amount: "adult",
                    dosage: "2.5mg/3cc NS nebulized",
                    notes: [
                        "Repeat nebs every 10min as needed.",
                        "Ipratropium and albuterol may be cominbed (Duoneb).",
                        "Patient respiratory status must be reassess after each does to determine need for additional treatment.",
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "2.5mg nebulized",
                    notes: [
                        "Start with 1.25mg if patient is < 1 year in age.",
                        "Reassess patient after each dose to determine need for additional dosing.",
                    ]
                },
                {
                    amount: "infant",
                    dosage: "2.5mg nebulized",
                    infants: [
                        "If wheezing persists after nasal suctioning, administer Epinephrine IM (See Epinephrine Protocols under Respiratory Distress/Wheezing."
                    ]
                }
            ]
        },
        {
            type: "Obstetrical Emergencies",
            weights: [
                {
                    amount: "adult",
                    dosage: "Rapidly infuse 1 liter of NS. 2.5mg via nebulization. Magnesium Sulfagte 1 gram IV and titrate per OLMC",
                    notes: [
                        ""
                    ]
                },
            ]
        },

    ]
}