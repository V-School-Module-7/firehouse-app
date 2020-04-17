export const zofran = {
    type: "Ondansetron (Zofran)",
    conditions: [
        {
            type: "nausea/vomiting",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IM/PO/SL: 4-8mg"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IM/PO/SL: 0.1mg/kg",
                    max: "Max of 4mg"
                }
            ]
        }
    ]
}