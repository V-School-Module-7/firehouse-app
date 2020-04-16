export const valium = {
    type: "Diazepam (Valium)",
    conditions: [
        {
            type: "anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 5mg every 10 min to desired effect",
                    max: "Max dose of 20mg"
                    //Multiple entries
                },
                {
                    //Multiple entries
                    amount:"pediatric",
                    dosage: "IV/IO 0.1 mg/kg may repeat once in 5 min",
                    notes: "Max dose of 5 mg per dose, DO NOT exceed adult dosing of 10 mg"
                    //IN/PO/IM Options
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount: "adult",
                    dosage: "10 mg IV",
                    notes: "May repeat once, if needed"
                },
                {
                    amount:"pediatric",
                    dosage: "0.1 mg/kg IV/IM (max 10 mg)",
                    notes: "May repeat once, if needed"
                },
                {
                    notes: "Heat emergencies; benzodiazepines for shivering"
                }
            ]
        },
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 5mg every 10 min to desired effect | IM: 10mg ONCE (IM is not preferred unless no other options)",
                    max: "Max dose of 20mg",
                    notes: "Adult: May be used as an alternative. Follow same safety measures as Midazolam"
                },
                {
                    //Multiple Pediatric entries
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1mg/kg max dose of 5mg",
                    notes: "May repeat in 10min"
                }
            ]
        },
        {
            type: "anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "5 mg every 10 min to desired effect (IV/IO/IN/PO)",
                    max: "Total max dose of 10mg",
                    notes: "IM: 10mg ONCE"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1 mg/kg may repeat once in 5 min",
                    //METHODS DIFFER
                    notes: "Dependent on method"
                }
            ]
        }

    ]
}