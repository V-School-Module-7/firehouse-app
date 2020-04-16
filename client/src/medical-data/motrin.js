export const motrin = {
    type: "Ibuprofen (Motrin)",
    conditions: [
        {
            type: "pain/inflammation/fever relief",
            weights: [
                {
                    amount: "adult",
                    dosage: "1000mg by mouth"

                },
                {
                    amount:"pediatric",
                    dosage: "10mg/kg by mouth",
                    notes: "Contraindicated in children under 6 months"
                }
            ]
        }
    ]
}