export const atropine = {
    type: "Atropine",
    conditions: [
        {
            type: "bradycardia",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "0.5 IV/IO",
                    notes: "Repeat as needed every 3 min until pulse or BP improved MAX DOSE: 3mg - Adult Dosing 5mL every min up to 30mL"
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.02 mg/kg IV/IO",
                    notes: "Minimum single dose: 0.1 mg - Maximum single dose: 0.5 mg. Repeat Atropine every 3-5 min until pulse or BP improved. MAX DOSE: 1mg for Child, 2 mg for Adolescent"
                },
                {
                    amounts: "3.5 kg",
                    dosage: "0.1mg / 1mL"
                },
                {
                    amounts: "5 kg",
                    dosage: "0.1mg / 1mL"
                },
                {
                    amounts: "8.2 kg",
                    dosage: "0.16mg / 1.64mL"
                },
                {
                    amounts: "10.5 kg",
                    dosage: "0.21mg / 2.10mL"
                },
                {
                    amounts: "13 kg",
                    dosage: "0.26mg / 2.6mL"
                },
                {
                    amounts: "16 kg",
                    dosage: "0.32mg / 3.2mL"
                },
                {
                    amounts: "19 kg",
                    dosage: "0.38mg / 3.8mL"
                },
                {
                    amounts: "22 kg",
                    dosage: "0.44mg / 4.4mL"
                },
                {
                    amounts: "26 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "28 kg",
                    dosage: "0.5mg / 1mL"
                },
                {
                    amounts: "32 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "34 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "36 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "37 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "39 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "41 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "47 kg",
                    dosage: "0.5mg / 5mL"
                },
                {
                    amounts: "52 kg",
                    dosage: "0.5mg / 5mL"
                },
            ]
        },
        {
            type: "beta blocker toxicity",
            weights: [
                {
                    amounts: "Adult",
                    dosage: "for Bradycardia with Hypotension 1 mg IV repeat every 5 min as needed",
                    notes: "Max total dose of 3 mg"
                },
                {
                    amounts: "Pediatric",
                    dosage: "0.2 mg/kg IV to a max of 1mg/dose",
                    notes: "Repeat every 5 min as needed. MAX Total dose of 3 mg"
                }
            ]
        },
        {
            type: "toxic exposure - organophosphate/nerve agent",
            weights:[
                {
                    amounts: "Adult",
                    dosage: "Mild to Moderate initial symptoms IV/IO preffered or IM - 2 mg rapid IV/IO (preffered) or IM. SEVERE symptoms - 4mg rapid IM",
                    notes: "Repeat every 15 minutes until symptoms improve"
                },
                {
                    amounts: "Under 2 years of age",
                    dosage: "IV/IO 0.02 mg/kg repeated every 15 min - IM: 0.05 mg/kg repeated every 15 min for mild to moderate initial symptoms - IM: 0.01 mg/kg repeated every 15 min for severe symptoms until improvement"
                },
                {
                    amounts: "Age 2-10",
                    dosage: "IV/IO/IM: 1mg repeated every 15 min until symptoms improve - Severe symptoms: 2mg repeated every 15 min until symptoms improve"
                },
                {
                    amounts: "Age > 10",
                    dosage: "IV/IO preffered or IM: 2mg rapid push repeated every 15 min for mild to moderate until improve - IM For Sever symptoms: 4mg rapid IM repeated every 15 min until symptoms improve"
                }
            ]
        }
    ]
}