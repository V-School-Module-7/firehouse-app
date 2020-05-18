module.exports = {
    type: "Norepinephrine",
    conditions: [
        {
            type: "hypoperfusion/bradycardia/snake bites",
            weights: [
                {
                    amount: "Adult",
                    dosage: "0.3-3 mcg/min IV/IO infusion for hypoperfusion",
                    notes: [
                        "Titrate to maintain SBP >100 mmHg"
                    ]
                },
                {
                    amount: "Pediatric",
                    dosage: "0.05-0.1 mcg/kg/min IV/IO initial dose infusion for hypoperfusion",
                    notes: [
                        "Titrate to maintain a SBP >70 + (age in years * 2) mmHg - Max Dose: 2mcg/kg/min"
                    ]
                }
            ]
        }
    ]
}