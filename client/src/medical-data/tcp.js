module.exports = {
    type: "Transcutaneous Pacing (TCP)",
    conditions: [
        {
            type: "transcutaneous pacing (tcp)",
            weights: [
                {
                    amount: "adult",
                    dosage: "see notes",
                    notes: [
                        "Initial rate of 80 beats per min, if patient does not response to medications",
                        "Consider sedation for TCP as per pain and anxiety guideline in General COG"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "see notes",
                    notes: [
                        "Initial rate of 100 beats per min, if patient does not response to medications"
                    ]
                }
            ]
        }
    ]
}