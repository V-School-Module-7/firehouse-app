module.exports = {
    type: "Glucagon",
    conditions: [
        {
            type: "hypoglycemia",
            weights: [
                {
                    amount: "adult",
                    dosage: "1mg IM if no IV/IO access",
                    notes: [
                        ""
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "0.1mg/kg IM if no IV/IO access",
                    notes:[
                        "Max dose of 1mg"
                    ]
                }
            ]
        }
    ]
}