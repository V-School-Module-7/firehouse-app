export const phenergan = {
    type: "Promethazine (Phenergan)",
    conditions: [
        {
            type: "nausea/vomiting",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 12.5-25 mg if SBP>100",
                    notes: "Dilute with 10 mL of NS and push slowly over 60 sec with a wide open IV running to dilute it as it is administered | IM: 25 mg if no vascular access"
                },
                {
                    amount:"pediatric",
                    dosage: "Not recommended."
                }
            ]
        }
    ]
}