export const glucagon = {
    type: "Glucagon",
    conditions: [
        {
            type: "hypoglycemia",
            weights: [
                {
                    amount: "adult",
                    dosage: "1mg IM if no IV/IO access"
                },
                {
                    amount:"pediatric",
                    dosage: "0.1 mg/kg IM if no IV/IO access",
                    notes: "Max dose of 1mg"
                }
            ]
        }
    ]
}