export const fentanyl = {
    type: "Fentanyl",
    conditions: [
        {
            type: "Pain and Anxiety Management",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "IV/IO/IM/IN: 25-50 mcg every 10 min"
                },
                {
                    amounts: "Pediatric",
                    dosage: "IV/IM/IO: 1 mcg/kg (max 50 mcg per dose) - IN: 2 mcg/kg (Max 100 mcg per dose)",
                    notes: [
                        "May repeat 1x if needed after 10-15 min"
                    ]
                }
            ]
        }
    ]
}