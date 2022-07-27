module.exports = {
    type: "Diazepam (Valium)",
    conditions: [
        {
            type: "anxiety control",
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
                    dosage: "5mg IV/IO",
                    notes: [
                        "May repeat every 5 min, if needed",
                        "Total max dose: 20mg",
                        "Heat emergencies; benzodiazepines for shivering",
                        "IM: 10mg, may repeat once in 10 min if needed (IM not preferred unless no other option), Total Max 20mg",
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.1mg/kg IV/IM (max 5mg)",
                    notes: [
                        "May repeat every 5 min, if needed",
                        "Max dose: 10mg",
                        "Heat emergencies; benzodiazepines for shivering",
                        "IM: 0.2 mg/kg (max 10mg), may repeat every 10 min if needed. Total Max dose 20mg (IM not preferred unless no other options)"
                    ]
                }
            ]
        },
        {
            type: "seizures",
            weights: [
                {
                    amount: "adult",
                    dosage: "5mg, may repeat every 5min, if needed",
                    notes: [
                        "Benzodiazepines: Cut the DOSE in half if the patient is under the influence of narcotics or alcohol",
                        "Total max dose: 20mg",
                        "IM: 10mg may repeat once in 10 min, if needed. Total Max dose: 20 mg (IM not preferred unless no other options)"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.1mg/kg max dose of 5mg, may repeat every 5 min if needed",
                    notes: [
                        "Total max dose: 10 mg",
                        "Intramuscular(IM): 0.2 mg/kg (max 10 mg), may repeat every 10 min, if needed. Total Max dose: 20 mg. (IM not preferred unless no other option)."
                    ]
                }
            ]
        },
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 5mg every 10min to desired effect",
                    notes: [
                        "Max dose of 20mg",
                        "IM: 10 mg once (IM is not preferred unless no other options)"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1mg/kg max dose of 5mg",
                    notes: [
                        "IV/IO: May repeat in 10min, if needed",
                        "Total Max dose: 10 mg"
                    ]
                }
            ]
        }

    ]
}