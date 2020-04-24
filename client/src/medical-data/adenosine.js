export const adenosine = {
    type: "Adenosine",
    conditions : [
    {
        type: "complex tachycardia (narrow or wide, if regular and monomorphic)",
        weights: [
                {
                    amount:"adult",
                    dosage: "6mg IV/IO initially",
                    notes: [
                        "If no conversion, repeat with 12mg IV/IO.",
                        "May repeat every 3 min to max 3 doses total of Adenosine (6,12,12)"
                    ],
                },
                {
                    amount:"pediatric",
                    dosage: "0.1mg/kg to max 6mg",
                    notes: [
                        "If no conversion, repeat with 0.2 mg/kg IV/IO to max 12mg.",
                        "May repeat every 3 min up to max 3 doses"
                    ]
                }
            ]
        }
    ]

}