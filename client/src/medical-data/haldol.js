export const haldol = {
    type: "Haloperidol (Haldol)",
    conditions: [
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 2-5 mg | IM: 5-10mg"
                },
                {
                    amount:"pediatric",
                    dosage: "6-12yrs: 1-3 mg/dose IM | 12 years+: 5-10 mg IM or 2-5 mg IV/IO",
                    notes: "<6 years: Not recommended."
                },
                {
                    notes: "Contact OLMC for repeat dosing"
                }
            ]
        }
    ]
}