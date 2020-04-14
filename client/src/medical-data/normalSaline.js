export const normalSaline = {
    type: "Normal Saline",
    conditions: [
        {
            type:"cardiac arrest",
            weights: [
                {
                    amount:"adult",
                    dosage: "1000 cc IV"
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg reassess & repeat if needed"
                }
        ]
        },
        {
            type: "cardiac chest pain-acute coronary syndrome",
            weights: [
                {
                    amount: "adult",
                    dosage: "500mL IV over 15min to increase preload if patient is hypotensive" //
                },
                {
                    amount: "pediatric",
                    dosage: "not recommended"
                }
            ]
        },
        {
            type: "congestive heart failure/pulmonary edema",
            weights: [
                {
                    amount: "Limit fluid bolus 250-500mL",
                    dosage: ""
                },
                {
                    amount: "pediatric",
                    dosage: "not recommended"
                }
            ]
        },
        {
            type: "pediatric resuscitation",
            weights: [
                {
                    amount: "newborn",
                    dosage: "NS(IV or IO) 10mL/kg syringe bolus over 5-10min"
                }
            ]
        },
        {
            type: "hyperglycemia",
            weights: [
                {
                    amount:"adult",
                    dosage: "1000 mL IV/IO over 30-60 min (Blood sugar > 300mg/dL"
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg IV/IO over 30-60 min (Blood sugar > 300mg/dL"
                }
            ]
        },
        {
            type: "hyperthermia",
            weights: [
                {
                    amount:"adult",
                    dosage: "500-1000 mL bolus"
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg bolus"
                },
                {
                    notes:" Cool fluid therapy"
                }
            ]

        },
        {
            type: "hypothermia",
            weights: [
                {
                    amount:"adult",
                    dosage: "500-1000 mL bolus"
                },
                {
                    amount:"pediatric",
                    dosage: "20mL/kg bolus"
                },
                {
                    notes:" Warm fluid therapy"
                }
            ]
        },
        {
            /* NOTE: Under Burns:
            Parkland Formula: 4 mL per kg per % burn during the first 24 hours.
            Give half of this amount during the first 8 hours from time of injury and the remainder over the next 16 hours
                Example of parkland formula:
            -	4 mL x 100 kg x 20% burn = 8000 mL = total fluid replacement
            -	Electrical burns/lightning strikes:
            If diagnosed with rhabdomyolysis prior to transport, increase fluid replacement
            */
            type: "burns",
            weights: [
                {
                    amount:"adult",
                    dosage: "500 cc/hour (no bolus)",
                    notes: "If BSA for 2nd or 3rd degree burns is >10% begin NS at 500 cc/hour (no bolus). If time from burn is >30 min, begin fluids using parkland formula"
                },
                {
                    amount:"pediatric <5 years",
                    dosage: "125cc/hour"
                },
                {
                    amount:"5-13 years",
                    dosage: "250cc/hour"
                },
                {
                    amount:">13 years",
                    dosage: "500cc/hour"
                }
            ]
        },
        {
            type:"crush injury",
            weights: [
                {
                    amount:"adult",
                    dosage: "1 Liter adminstration prior to release from entrapment IV/IO"
                },
                {
                    amount:"pediatric",
                    dosage: "20mg/kg prior to release of entrapment IV/IO"
                }
        ]
        },
        {
            type: "kidney failure/dialysis patients",
            //NOTE: Contact OLMC if shock has not been reversed
            weights: [
                {
                    amount:"adult",
                    dosage: "500mL fluid bolus up to a max of 1 liter and reassess for reversal signs of shock"
                },
                {
                    amount:"pediatric",
                    dosage: "10mL/kg fluid bolus up to a max of 20mL and reassess for reversal of the signs of shock"
                }
        ]
        },
        {
            type: "traumatic shock",
            weights: [
                {
                    amount:"adult",
                    dosage: "Give fluid bolus of 500mL at a time, reassess and repeat as needed"
                },
                {
                    amount:"pediatric",
                    dosage: "Give fluid bolus of NS 20mL/kg at a time, reassess and repeat up to a max od 60mL/kg total. Reassess for reversal of the signs of shock"
                }
        ]
        },
        {
            type: "non-traumatic shock",
            weights: [
                {
                    amount:"adult",
                    dosage: "Provide 500mL boluses to a max of 2 liters. Reassess for reversal of the signs of shock. "
                },
                {
                    amount:"pediatric",
                    dosage: "Provide 20mL/kg boluses up to a max of 60 mL/kg. Reassess for reversal of the signs of shock"
                }
                //NOTE: If patient remains hypotensive after administering 60mL/kg, call OLMC.
        ]
        }

    ]
}