module.exports = {
    type: "Ibuprofen (Motrin)",
    conditions: [
        {
            type: "pain/inflammation/fever relief",
            weights: [
                {
                    amount: "adult",
                    dosage: "800mg by mouth",
                    notes: [
                        ""
                    ]

                },
                {
                    amount:"pediatric",
                    dosage: "10mg/kg by mouth",
                    notes: [
                        "Contraindicated in children under 6 months"
                    ]
                }
            ]
        }
    ]
}