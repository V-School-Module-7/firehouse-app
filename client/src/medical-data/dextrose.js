module.exports = {
    type: "Dextrose",
    conditions: [
        {
            type: "(dextrose 10%) newborn resuscitation",
            weights: [
                {
                    amount:"pediatric",
                    dosage: "Newborn: Run D10 if available for maintenance fluid at 10 mL/hr after bolus | Neonate (<30 days): D10W 2 mL/kg(200mg/kg) if blood glucose is less than 60mg/dL",
                    notes: [
                        ""
                    ]
                }
            ]
        },
        {
            type: "(dextrose 10%) hypoglycemia/altered mental status/violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "Dextrose 10%, infuse 125cc then recheck blood sugar",
                    notes: [
                        "Repeat as necessary"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "Dextrose 10% (D10NS) 5mL/kg IV/IO (0.5 grams/kg) IV/IO",
                    notes: [
                        "May repeat as necessary up to a max of 125 mL (12.5grams)"
                    ]
                },
                {
                    amount:"infant",
                    dosage: "Dextrose 10% (D10NS) 5mL/kg IV/IO (D10=10 mL D50 in 40 mL NS)",
                    notes: [
                        ""
                    ]
                }
            ]
        },
        {
            type: "(dextrose 25%) hypoglycemia",
            weights: [
                {
                    amount:"pediatric",
                    dosage: "Dextrose 25% (D25W) 2 mL/kg IV/IO (D25=25mL D50 in 25 mL NS)",
                    notes:[
                        "Pediatric: Children greater than 1yr"
                    ]
                }
            ]
        },
        {
            type: "(dextrose 50%) hypoglycemia/altered mental status/violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "25 grams IV/IO titrate to effect for hypoglycemia",
                    notes: [
                        "May repeat as necessary"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "Use D25 or D10",
                    notes: [
                        ""
                    ]
                }
            ]
        },
        {
            type: "(dextrose 50%) hypoglycemia",
            weights: [
                {
                    amount: "adult",
                    dosage: "12 grams (25mL) IV/IO",
                    notes: [
                        "May repeat as necessary"
                    ]
                }
            ]
        }
    ]
}