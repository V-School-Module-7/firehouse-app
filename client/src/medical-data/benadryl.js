export const benadryl = {
    type: "Diphenhydramine (Benadryl)",
    conditions: [
        {
            type: "allergic reaction (moderate to severe)",
            weights: [
                {
                    amount: "adult",
                    dosage: "50mg IV/IO/IM"
                },
                {
                    amount:"pediatric",
                    dosage: "1mg/kg",
                    max: "50 mg single dose IV/IO/IM"
                }
            ]
        }
    ]
}