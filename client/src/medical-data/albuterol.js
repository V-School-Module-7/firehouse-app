module.exports = {
    type: "Albuterol",
    conditions: [
        {
            type: "wheezing/asthma/anaphylaxis",
            weights: [
                {
                    amount: "adult",
                    dosage: "2.5mg every 10 min via nebulation for bronchospasm/wheezing until symptoms subside",
                    notes: [
                        "Reassess patient after each dose to determine need for additional dosing. Consider CPAP in awake patients with respiratory distress."
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "2.5mg every 10 min via nebulation until symptoms subside",
                    notes: [
                        "Start with 1.25mg if patient is < 1 year in age"
                    ]
                }
            ]
        }

    ]
}