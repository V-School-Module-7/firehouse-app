module.exports = {
    type: "Diphenhydramine (Benadryl)",
    conditions: [
        {
            type: "Anaphylaxis/Allergic Reaction",
            weights: [
                {
                    amount: "adult",
                    dosage: "50mg IV/IO/IM",
                    notes: [
                        "allergic reaction with urticaria/itching"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "1mg/kg",
                    notes: [
                        "To max of 50mg IV/IO/IM for allergic reaction with urticaria/itching"
                    ]
                }
            ]
        }
    ]
}