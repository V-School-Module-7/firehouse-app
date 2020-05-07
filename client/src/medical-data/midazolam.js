module.exports = {
    type: "Midazolam (Versed)",
    conditions: [
        {
            type: "seizures",
            weights: [
                {
                    amount: "adult",
                    dosage: "5mg every 5 min to desired effect (IV/IO/IN/PO/IM)",
                    notes: [
                        "Total max dose of 10mg"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1 mg/kg | IN/PO 0.3 mg/kg | IM 0.15 mg/kg ",
                    notes: [
                        "IV/IO/IN/PO/IM: May repeat once in 5min, if needed",
                        "IV/IO & IM: Max dose of 5mg per dose, DO NOT exceed adult dosing of 10mg",
                        "IN/PO:	Total max of 10mg"
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
                    notes:[
                        "Heat emergencies; benzodiazepines for shivering",
                        "May repeat once, if needed"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.3 mg/kg IN/IV/IM (max 2 mg)",
                    notes: [
                        "May repeat once, if needed"
                    ]
                }
            ]
        },
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "5mg every 5min to desired effect (IV/IO/IN/PO)",
                    notes:[
                        "Total max dose of 10mg",
                        "IM: 10mg ONCE"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1 mg/kg | IN/PO: 0.3 mg/kg | IM: 0.15 mg/kg",
                    notes: [
                        "IV/IO: May repeat once in 5min",
                        "IV/IO: Max dose of 5 mg per dose, DO NOT exceed adult dosing of 10 mg",
                        "IN/PO: May repeat once in 10min",
                        "IN/PO:	Total max of 10mg (Violent Patient)",
                        "IN/PO: Total max dose of 5mg per dose (Anxiety Control)",
                        "IM: Max dose of 5mg per dose ONCE"
                    ]
                }
            ]
        },
        {
            type: "anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "5mg every 10min to desired effect (IV/IO/IN/PO)",
                    notes: [
                        "Total max dose of 10mg",
                        "IM: 10mg ONCE"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.1mg/kg | IN/PO: 0.3mg/kg | IM: 0.15mg/kg",
                    notes: [
                        "IV/IO: May repeat once in 5min", "IV/IO: Max dose of 5mg per dose, DO NOT exceed adult dosing of 10mg",
                        "IN/PO: May repeat once in 10min",
                        "IN/PO: Total max dose of 5mg per dose",
                        "IM: Max dose of 5 mg per dose ONCE"
                    ]
                }
            ]
        }

    ]
}