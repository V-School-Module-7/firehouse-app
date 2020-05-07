module.exports = {
    type: "Procainamide",
    conditions: [
        {
            type: "stable wide complex tachycardia",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "Give 15 mg/kg to max 1000mg IV/IO over 60 min",
                    notes: [
                        "STOP ifusion for: Conversion of rhythm",
                        "Completion of infusion",
                        "Drop of SBP <100 mmHg",
                        "QRS width increses by >50%",
                        "Severe Bradycardia or AV block"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "Give 15 mg/kg to max 1000 mg IV/IO over 30-60 min",
                    notes: [
                        "STOP ifusion for: Conversion of Rhythm",
                        "Completion of infusion",  "Drop of SBP <70 + 2X age",
                        "QRS width increases by >50%",
                        "Sever Bradycardia or AV block"
                    ]
                }
            ]
        }
    ]
}