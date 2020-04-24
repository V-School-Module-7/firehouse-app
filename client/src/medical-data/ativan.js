export const ativan = {
    type: "Lorazepam (Ativan)",
    conditions: [
        {
            type: "seizures",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO/IM: 1-2 mg every 5min to desired effect",
                    notes: [
                        "Total max dose of 4mg"
                    ]
                },
                {
                    amount: "pediatric",
                    dosage: "IV/IO/IM: 0.1 mg/kg",
                    notes: [
                        "Max dose of 2mg",
                        "May repeat every 5min, if needed",
                        "DO NOT exceed adult dosing of 4mg total max"
                    ]
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount: "adult",
                    dosage: "2mg IV",
                    notes: [
                        "May repeat once, if needed",
                        "Heat emergencies; benzodiazepines for shivering"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.1 mg/kg IV/IM",
                    notes: [
                        "Max of 2mg",
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
                    dosage: "IV/IO: 1-2mg every 5min to desired effect | IM: 10mg ONCE",
                    notes: [
                        "IV/IO: 4mg Max dose",
                        "IM is not preferred unless no other option"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.05mg/kg | IM: 0.05mg/kg",
                    notes: [
                        "IV/IO: Max dose of 2mg, may repeat once in 10min.",
                        "IV/IO: Do NOT exceed adult dose of 4mg",
                        "IM: max 4mg ONCE"
                    ]
                }
            ]
        },
        {
            type: "pain and anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 1-2mg every 5 min to desired effect | IM: 4mg ONCE",
                    notes: [
                        "IV/IO: 4mg Max dose"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.05mg/kg | IM: 0.05mg/kg",
                    notes: [
                        "IV/IO: Max dose of 2mg, may repeat once in 10min",
                        "IV/IO: Do NOT exceed adult dose of 4mg",
                        "IM: max 4mg ONCE"
                    ]
                }

            ]
        }
    ]
}