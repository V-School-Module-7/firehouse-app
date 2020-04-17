export const tcp = {
    type: "Transcutaneous Pacing (TCP)",
    conditions: [
        {
            type: "transcutaneous pacing (tcp)",
            weights: [
                {
                    amount: "adult",
                    dosage: "n/a",
                    notes: "Initial rate of 80 beats per min, if patient does not response to medications"
                },
                {
                    amount:"pediatric",
                    dosage: "n/a",
                    notes: "Initial rate of 100 beats per min, if patient does not response to medications"
                },
                {
                    notes: "Consider sedation for TCP as per pain and anxiety guideline in General COG"
                }
            ]
        }
    ]
}