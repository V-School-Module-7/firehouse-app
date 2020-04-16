export const dextrose = {
    type: "Dextrose",
    conditions: [
        {
            type: "newborn resuscitation (dextrose 10%)",
            weights: [
                {
                    amount:"pediatric",
                    dosage: "Newborn: Run D10 if available for maintenance fluid at 10 mL/hr after bolus | Neonate (<30 days): D10W 2 mL/kg(200mg/kg) if blood glucose is less than 60mg/dL"
                }
            ]
        },
        {
            type: "hypoglycemia/altered mental status/ violent patient (dextrose 10%)",
            weights: [
                {
                    amount: "adult",
                    dosage: "Dextrose 10%, infuse 125cc then recheck blood sugar",
                    notes: "Repeat dosage as necessary"
                },
                {
                    amount:"pediatric",
                    dosage: "Dextrose 10% (D10NS) 5 mL/kg IV/IO (D10=10 mL D50 in 40 mL NS)"
                },
                {
                    notes: "Infant: Dextrose 10% (D10NS) 5 ml/kg IV/IO if blood glucose is less than 60 mg/dL"
                }
            ]
        },
        {
            type: "hypoglycemia (dextrose 25%)",
            weights: [
                {
                    amount:"pediatric",
                    dosage: "Dextrose 25% (D25W) 2 mL/kg IV/IO (D25=25mL D50 in 25 mL NS)",
                    notes:"Pediatric: Children greater than 1yr"
                }
            ]
        },
        {
            type: "hypoglycemia/altered mental status/ violent patient (dextrose 50%)",
            weights: [
                {
                    amount: "adult",
                    dosage: "25 grams IV/IO titrate to effect for hypoglycemia",
                    notes: "Repeat dosage as necessary"
                },
                {
                    amount:"pediatric",
                    dosage: "Use D25 or D10"
                }
            ]
        }
    ]
}