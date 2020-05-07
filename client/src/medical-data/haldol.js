module.exports = {
    type: "Haloperidol (Haldol)",
    conditions: [
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 2-5mg | IM: 5-10mg",
                    notes:[
                        "Contact OLMC for repeat dosing"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "6-12yrs: 1-3mg/dose IM | 12 years+: 5-10 mg IM or 2-5mg IV/IO",
                    notes: [
                        "<6 years: Not recommended",
                        "Contact OLMC for repeat dosing"
                    ]
                }
            ]
        }
    ]
}