export const lidocaine = {
    type: "Lidocaine",
    condition: [
        {
            type: "cardiac arrest",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "1-1.5 mg/kg IV push, or one time dose of 1.5 mg/kg",
                    notes: [
                        "May repeat every 3-5 min up to 3mg/kg"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "1 mg/kg IV/IO/ET",
                    notes: [
                        "May repeat every 3-5 min up to 3 mg/kg"
                    ]
                }
            ]
        },
        {
            type: "post cardiac arrest/rosc",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "0.5-1.5 mg/kg IV push (If NOT given Lidocaine during the arrest)",
                    notes: [
                        "Followed by continuous ifusion of 2-4 mg/min"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "Consult with OLMC for direction if blood pressure is less than pediatric lowest acceptable systolic blood pressure",
                    notes: [
                        
                    ]
                }
            ]
        },
        {
            type: "post cardiac arrest/rosc - with previous lidocaine or amiodarone therapy during cardiac arrest resuscitation",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "Begin continuous ifusion 2-4 mg/min",
                    notes: [
                        
                    ]
                }
            ]
        },
        {
            type: "tachycardia with a pulse -  Concentration: 100mg/5mL (20mg per mL)",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "1-1.5 mg/kg IV",
                    notes: [
                        "May repeat every 3-5 min up to 3 mg/kg"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "1 mg/kg IV/IO",
                    notes: [
                        "May repeat every 3-5 min up to 3 mg/kg"
                    ]
                },
                {
                    amounts: "3.5 kg",
                    dosage: "3.50mg / 0.18mL",
                    notes: [
                        "Up to: 10.50mg / 0.53mL"
                    ]
                },{
                    amounts: "5 kg",
                    dosage: "5mg / 0.25mL",
                    notes: [
                        "Up to: 15mg / 0.75mL"
                    ]
                },
                {
                    amounts: "8.2 kg",
                    dosage: "8.2mg / 0.41mL",
                    notes: [
                        
                    ]
                },
                {
                    amounts: "10.5 kg",
                    dosage: "10.5mg / 0.53mL",
                    notes: [
                        "Up to: 31.5mg / 1.58mL"
                    ]
                },
                {
                    amounts: "13 kg",
                    dosage: "15mg / 0.65mL",
                    notes: [
                        "Up to: 39mg / 1.95mL"
                    ]
                },
                {
                    amounts: "16 kg",
                    dosage: "16mg / 0.80mL",
                    notes: [
                        "Up to: 48mg / 2.4mL"
                    ]
                },
                {
                    amounts: "19 kg",
                    dosage: "19mg / 0.95mL",
                    notes: [
                        "Up to: 57mg / 2.85mL"
                    ]
                },
                {
                    amounts: "22 kg",
                    dosage: "22mg / 1.10mL",
                    notes: [
                        "Up to: 66mg / 3.3mL"
                    ]
                },
                {
                    amounts: "26 kg",
                    dosage: "26mg / 1.30mL",
                    notes: [
                        "Up to: 78mg / 3.9mL"
                    ]
                },
                {
                    amounts: "28 kg",
                    dosage: "28mg / 1.40mL",
                    notes: [
                        "Up to: 84mg / 4.2mL"
                    ]
                },
                {
                    amounts: "32 kg",
                    dosage: "32mg / 1.60mL",
                    notes: [
                        "Up to: 96mg / 4.8mL"
                    ]
                },
                {
                    amounts: "34 kg",
                    dosage: "34mg / 1.70mL",
                    notes: [
                        "Up to: 102mg / 5.10mL"
                    ]
                },
                {
                    amounts: "36 kg",
                    dosage: "36mg / 1.80mL",
                    notes: [
                        "Up to: 108mg / 5.4mL"
                    ]
                },
                {
                    amounts: "37 kg",
                    dosage: "37g / 1.85mL",
                    notes: [
                        "Up to: 111.00mg / 5.55mL"
                    ]
                },
                {
                    amounts: "39 kg",
                    dosage: "39mg / 1.95mL",
                    notes: [
                        "Up to: 117mg / 5.85mL"
                    ]
                },
                {
                    amounts: "41 kg",
                    dosage: "41mg / 2.05mL",
                    notes: [
                        "Up to: 123mg / 6.15mL"
                    ]
                },
                {
                    amounts: "47 kg",
                    dosage: "47mg / 2.05mL",
                    notes: [
                        "Up to: 141mg / 7.05mL"
                    ]
                },
                {
                    amounts: "52 kg",
                    dosage: "52mg / 2.60mL",
                    notes: [
                        "Up to: 156mg / 7.80mL"
                    ]
                },

            ]
        },
        {
            type: "respiratory distress",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "Lidocaine 2% 40-60 mg (2-3 mL)",
                    notes: [
                        "Added to Albuterol for adult patients with 'cough variant asthma' with sever coughin which inhibits respiratory function (with or without audible wheezes)"
                    ]
                }
            ]
        },
        {
            type: "io access in conscious patients",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "20-50 mg of 2% Lidocaine",
                    notes: [
                        "Given SLOWLY through IO before IO Bolus"
                    ]
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.5 mL/kg of 2% Lidocaine", 
                    notes: [
                        "Given SLOWLY through IO before IO Bolus"
                    ]
                }
            ]
        }
    ]
}