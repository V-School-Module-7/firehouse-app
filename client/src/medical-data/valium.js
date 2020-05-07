module.exports = {
    type: "Diazepam (Valium)",
    conditions: [
        {
            type: "anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 5mg every 10min to desired effect | IM: 10mg ONCE",
                    notes: [
                        "IV/IO: Max dose of 20mg",
                        "IM: May repeat once to a total max of 20mg",
                        "IM is not preferred unless no other options"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1mg/kg | IM: 0.2mg/kg once",
                    notes: [
                        "IV/IO: Max dose of 5mg",
                        "IV/IO: May repeat in 10min. DO NOT exceed adult dosing of 10mg Total max",
                        "IM: Max 10mg",
                        "IM is not preferred unless no other option"
                    ]
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount: "adult",
                    dosage: "10mg IV",
                    notes: [
                        "May repeat once, if needed",
                        "Heat emergencies; benzodiazepines for shivering"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.1mg/kg IV/IM (max 10mg)",
                    notes: [
                        "May repeat once, if needed",
                        "Heat emergencies; benzodiazepines for shivering"
                    ]
                }
            ]
        },
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 5mg every 10min to desired effect | IM: 10mg ONCE",
                    notes: [
                        "Max dose of 20mg",
                        "May be used as an alternative. Follow same safety measures as Midazolam",
                        "IM is not preferred unless no other options"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1mg/kg max dose of 5mg | IM: 0.2 mg/kg once",
                    notes: [
                        "IV/IO: May repeat in 10min",
                        "IV/IO: DO NOT exceed adult dosing of 10mg Max",
                        "IM: Max 10mg (IM is not preferred unless no other options)"
                    ]
                }
            ]
        }

    ]
}