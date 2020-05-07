module.exports = {
    type: "Normal Saline",
    conditions: [
        {
            type:"cardiac arrest",
            weights: [
                {
                    amount:"adult",
                    dosage: "1000cc IV",
                    notes:[
                        ""
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg",
                    notes:[
                        "Reassess & repeat if needed | Max dose: 60cc/kg"
                    ]
                }
        ]
        },
        {
            type: "cardiac chest pain-acute coronary syndrome",
            weights: [
                {
                    amount: "adult",
                    dosage: "500mL IV over 15min to increase preload if patient is hypotensive",
                    notes:[
                        ""
                    ]
                },
                {
                    amount: "pediatric",
                    dosage: "not recommended",
                    notes:[
                        ""
                    ]
                }
            ]
        },
        {
            type: "congestive heart failure/pulmonary edema",
            weights: [
                {
                    amount: "adult",
                    dosage: "Limit fluid bolus 250-500mL",
                    notes:[
                        ""
                    ]
                },
                {
                    amount: "pediatric",
                    dosage: "not recommended",
                    notes:[
                        ""
                    ]
                }
            ]
        },
        {
            type: "pediatric resuscitation",
            weights: [
                {
                    amount: "newborn",
                    dosage: "NS(IV or IO) 10mL/kg syringe bolus over 5-10min",
                    notes:[
                        ""
                    ]
                }
            ]
        },
        {
            type: "hyperglycemia",
            weights: [
                {
                    amount:"adult",
                    dosage: "1000mL IV/IO over 30-60 min (Blood sugar > 300mg/dL",
                    notes:[
                        ""
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg IV/IO over 30-60 min (Blood sugar > 300mg/dL",
                    notes:[
                        ""
                    ]
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount:"adult",
                    dosage: "500-1000 mL bolus",
                    notes:[
                        "Cool fluid therapy"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg bolus",
                    notes:[
                        "Cool fluid therapy"
                    ]
                }

            ]

        },
        {
            type: "hypothermia",
            weights: [
                {
                    amount:"adult",
                    dosage: "500-1000 mL bolus",
                    notes:[
                        "Warm fluid therapy"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg bolus",
                    notes:[
                        "Warm fluid therapy"
                    ]
                }
            ]
        },
        {
            type: "burns",
            weights: [
                {
                    amount:"adult",
                    dosage: "500 cc/hour (no bolus)",
                    notes: [
                    "If BSA for 2nd or 3rd degree burns is >10% begin NS at 500 cc/hour (no bolus).",
                    "If time from burn is >30 min, begin fluids using parkland formula",
                    "Parkland Formula: 4mL per kg per % burn during the first 24 hours.",
                    "Give half of this amount during the first 8 hours from time of injury and the remainder over the next 16 hours",
                        "Example of parkland formula:",
                    "4mL x 100kg x 20% burn = 8000mL = total fluid replacement",
                    "Electrical burns/lightning strikes:",
                    "If diagnosed with rhabdomyolysis prior to transport, increase fluid replacement"
                ]
                },
                {
                    amount:"pediatric",
                    dosage: "If 2nd or 3rd degree >10% BSA begin: <5 years: 125cc/hour | 5-13 years: 250cc/hour | >13 years: 500cc/hour",
                    notes: [
                        "Parkland Formula: 4mL per kg per % burn during the first 24 hours.",
                        "Give half of this amount during the first 8 hours from time of injury and the remainder over the next 16 hours",
                            "Example of parkland formula:",
                        "4mL x 100kg x 20% burn = 8000mL = total fluid replacement",
                        "Electrical burns/lightning strikes:",
                        "If diagnosed with rhabdomyolysis prior to transport, increase fluid replacement"
                    ]
                }
            ]
        },
        {
            type:"crush injury",
            weights: [
                {
                    amount:"adult",
                    dosage: "1 Liter adminstration prior to release from entrapment IV/IO",
                    notes: [
                        ""
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "20mg/kg prior to release of entrapment IV/IO",
                    notes: [
                        ""
                    ]
                }
        ]
        },
        {
            type: "kidney failure/dialysis patients",
            weights: [
                {
                    amount:"adult",
                    dosage: "500mL fluid bolus up to a max of 1 liter",
                    notes: [
                        "Reassess for reversal signs of shock",
                        "Contact OLMC if shock has not been reversed"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "10mL/kg fluid boluses up to a max of 20mL/kg",
                    notes: [
                        "Reassess for reversal signs of shock",
                        "Contact OLMC if shock has not been reversed"
                    ]
                }
        ]
        },
        {
            type: "traumatic shock",
            weights: [
                {
                    amount:"adult",
                    dosage: "Give fluid bolus of 500mL at a time",
                    notes: [
                        "Reassess and repeat as needed to:",
                        "If SBP is>80-90 mmHg, patient should have saline lock begun and should not be given IV fluid, unless BP falls below these limits",
                        "Maintain SBP to 80-90 mmHg without closed head injury",
                        "Maintain SBP to 110-120 with closed head injury",
                        "Once minimum blood pressures have been achieved the patient should have a saline lock and no further fluid boluses should be administered until BP falls below the limits"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "Give fluid bolus of NS 20mL/kg at a time",
                    notes: [
                        "Reassess and repeat up to a max of 60mL/kg total",
                        "Reassess for reversal of the signs of shock"
                    ]
                }
        ]
        },
        {
            type: "non-traumatic shock",
            weights: [
                {
                    amount:"adult",
                    dosage: "Provide 500mL boluses to a max of 2 liters",
                    notes: [
                        "Reassess for reversal of the signs of shock",
                        "If patient remains hypotensive after administering 60 mL/kg, call OLMC"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "Provide 20mL/kg boluses up to a max of 60mL/kg.",
                    notes: [
                        "Reassess for reversal of the signs of shock",
                        "If patient remains hypotensive after administering 60 mL/kg, call OLMC"
                    ]
                }
        ]
        }

    ]
}