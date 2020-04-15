export const magnesiumSulfate = {
    type: "Magnesium Sulfate",
    condition: [
        {
            type: "cardiac arrest",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "2gm IV over 2 min for torsades de pointes"
                },
                {
                    amounts: "Pediatric",
                    dosage: "25-50 mg/kg IV/IO for Torsades de Pointes",
                    notes: "Max 2 grams"
                }
            ]
        },
        {
            type: "respiratory distress",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "2 grams IV over 15-30 min for sever wheezing unresponsive to Albuterol"
                },
                {
                    amounts: "Pediatric",
                    dosage: "2 grams IV over 15-30 min for sever wheezing unresponsive to Albuterol"
                }
            ]
        },
        {
            type: "seizures",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "For Females with advanced pregnancy seizures - 4 grams IM or 4 grams over 15-30 min IV/IO"
                },
                {
                    amounts: "Pediatric",
                    dosage: "Contact OLMC!"
                }
            ]
        }
    ]
}