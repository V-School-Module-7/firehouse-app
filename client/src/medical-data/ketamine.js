export const ketamine = {
    type: "Ketamine (Ketalar)",
    conditions: [
        {
            type: "violent patient",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 1mg/kg every 10min to desired effect | IM: 4mg/kg ONCE",
                    notes: [
                    "IV/IO: Max total dose of 200mg", "IM: Max dose 300mg",
                    "Dose is cut in half if patient has received narcotics or alcohol",
                    "Consider size of patient for dosing"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 1mg/kg ONCE | IM: 3mg/kg ONCE",
                    notes:[
                    "IV: Max dose 200mg","IM: Max dose 300mg",
                     "Dose is cut in half if patient has received narcotics or alcohol",
                     "Consider size of patient for dosing"
                    ]
                }
            ]
        },
        {
            type: "pain and anxiety management",
            weights: [
                {
                    amount: "adult",
                    dosage: "IV/IO: 10-20mg every 5min to the desired effect or max dose |IN: 50mg x 1 dose",
                    notes: [
                    "IV/IO: Max dose of 40mg",
                    "Should only be used in patients who meet one or more of the following criteria:",
                    "Opiates are not tolerated well, patient request no opiates or they are on medications that block narcotics",
                    "Patient has marginal vitals that may worsen with additional opiates",
                    "Resistance to large doses of opiates",
                    "NOTE: This dose is 1/10 of the excited delirium dose",
                    "Consider the size of the patient for dosing"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "IV/IO: 0.15-0.3mg/kg every 5min to the desired effect or max dose | IN: 0.7mg/kg x 1 dose",
                    notes: [
                    "IV/IO: Max dose of 0.6mg/kg or 40mg whichever is less",
                    "Should only be used in patients who meet one or more of the following criteria:",
                    "Opiates are not tolerated well, patient request no opiates or they are on medications that block narcotics",
                    "Patient has marginal vitals that may worsen with additional opiates",
                    "Resistance to large doses of opiates",
                    "NOTE: This dose is 1/10 of the excited delirium dose",
                    "Consider the size of the patient for dosing"
                    ]
                }
            ]
        }

    ]
}