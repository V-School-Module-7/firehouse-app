export const ketamine = {
    type: "Ketamine (Ketalar)",
    conditions: [
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 1 mg/kg every 10 min to desired effect | IM: 4mg/kg ONCE",
                    max: "IV/IO: Max total dose of 200mg | IM: Max dose 300mg"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 1mg/kg ONCE | IM: 3mg/kg ONCE",
                    max: "IV: Max dose 200mg | IM: Max dose 300mg",
                    notes: "May repeat in 10min"
                },
                {
                    notes: "Dose is cut in half if patient has received narcotics or alcohol. Consider size of patient for dosing"
                }
            ]
        },
        {
            type: "pain and anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 10-20 mg every 5 min to the desired effect or total max | IN: 50mg x 1 dose",
                    max: "IV/IO: Total max dose of 40 mg",
                    notes: "IM: 10mg ONCE"
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.15-0.3 mg/kg every 5 min to the desired effect or max dose | IN: 0.7mg/kg x dose",
                    max: "Max dose of 0.6 mg/kg or 40 mg whichever is less"
                },
                {
                    notes: "Should only be used in patients who meet one or more of the following criteria: Opiates are not tolerated well, patient request no opiates or they are on medications that block narcotics | Patient has marginal vitals that may worsen with additional opiates |Resistance to large doses of opiates |This dose is 1/10 of the excited delirium dose | Consider the size of the patient for dosing"
                }
            ]
        }

    ]
}