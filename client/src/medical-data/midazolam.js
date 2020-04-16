export const midazolam = {
    type: "Midazolam (Versed)",
    conditions: [
        {
            type: "seizures",
            weights: [
                {
                    amount: "adult",
                    dosage: "5 mg every 5 min to desired effect (IV/IO/IN/PO/IM)",
                    max: "Total max dose of 10 mg"
                },
                {
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
                    dosage: "2 mg IV, may repeat once if needed"
                },
                {
                    amount:"pediatric",
                    dosage: "0.3 mg/kg IN/IV/IM (max 2 mg)",
                    notes: "May repeat once, if needed"
                },
                {
                    notes:"Heat emergencies; benzodiazepines for shivering"
                }
            ]
        },
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "5 mg every 5 min to desired effect (IV/IO/IN/PO)",
                    max: "Total max dose of 10mg",
                    notes: "IM: 10mg ONCE"
                },
                {
                    amount:"pediatric",
                    dosage: "0.3 mg/kg IN/IV/IM (max 2 mg)",
                    notes: "May repeat once, if needed"
                },
                {
                    notes:"Heat emergencies; benzodiazepines for shivering"
                }
                //MULTIPLE PEDIATRIC ENTRIES
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