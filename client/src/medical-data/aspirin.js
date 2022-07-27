module.exports = {
    type: "Aspirin",
    conditions: [
        {
            type: "Chest Pain",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "325 mg",
                    notes: [
                        "Preferably chewed if patient is > 18 an no reported allergies to Aspirin",
                        "Administer even if patient takes a daily dose"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "NOT RECOMMENDED",
                    notes: [
                        ""
                    ]
                }
            ]
        }
    ]
}