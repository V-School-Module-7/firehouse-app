export const ativan = {
    type: "Lorazepam (Ativan)",
    conditions: [
        {
            type: "seizures",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO/IM 1-2 mg every 5 min to desired effect",
                    max: "Total max dose of 4mg"
                },
                {
                    amount: "pediatric",
                    dosage: "IV/IO/IM 0.1 mg/kg",
                    max: "Max dose of 2mg",
                    notes: "May repeat every 5 min, if needed. Max dose of 5 mg per dose, DO NOT exceed adult dosing of 4mg total max"
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount: "adult",
                    dosage: "2 mg IV",
                    notes: "May repeat once, if needed"
                },
                {
                    amount:"pediatric",
                    dosage: "0.1 mg/kg IV/IM (max 2 mg)",
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
                    dosage: "IV/IO: 5mg every 10 min to desired effect | IM: 10mg ONCE (IM is not preferred unless no other option)",
                    max: "IV/IO: 4mg Max dose"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.05 mg/kg | IM: 0.05mg/kg, max 4mg ONCE",
                    notes: "May repeat once in 10min. DO NOT exceed adult dose of 4mg"
                }
            ]
        },
        {
            type: "pain and anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 1-2mg every 5 min to desired effect | IM: 4mg ONCE",
                    max: "IV/IO: 4mg Max dose"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.05 mg/kg | IM: 0.05mg/kg, max 4mg ONCE",
                    max: "Max dose of 2mg",
                    notes: "May repeat once in 10min. DO NOT exceed adult dose of 4mg"
                }

            ]
        }
    ]
}