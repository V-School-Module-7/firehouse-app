module.exports = {
    type: "Calcium Chloride",
    conditions: [
        {
            type: "Cardiac Arrest",
            weights: [
                {
                    amount: "adult",
                    dosage: "1 gram IV/IO over 2min",
                    notes: [
                        "Known or suspected Hyperkalemia",
                        "May repeat in 5 min x 1 or Calcium Gluconate 3 grams IV/IO over 2min may repeat 1x"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20 mg/kg IV/IO may repeat in 10 min (max 2 grams) or Calcium Gluconate 100 mg/kg IV/IO may repeat in 10 min (max 3 grams)",
                    notes: [
                        ""
                    ]
                }
            ]
        }
    ]
}