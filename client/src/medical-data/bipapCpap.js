module.exports = {
    type: "BIPAP/CPAP",
    conditions: [
        {
            type: "Congestive Heart Failure/Pulmonary Edema",
            weights: [
                {
                    amount: "adult",
                    dosage: "CPAP: Provide 10 L/min O2 and PAP of 10 cm H2O to begin | BIPAP: Provide 10 L/min O2 and IPAP at 10 cm H2O with EPAP about 5 cm H2O",
                    notes: [
                            "Consider when patient is awake, cooperative and needs assistance with oxygenation and ventilation"
                    ]

                },
                {
                    amount:"pediatric",
                    dosage: "",
                    notes: [
                        "ONLY use when patient is on machine at home. Maintain home settings and bring machine with the patient. If unable to adequately ventilate return to BVM or advance to intubation"
                    ]
                }
            ]
        },
        {
            type: "Respiratory Distress/Airway and Tracheostomy Management",
            weights: [
                {
                    amount: "adult",
                    dosage: "CPAP: Provide 10L/min O2 and PAP of 5cm H2O to begin | BIPAP: Provide 10L/min O2 and IPAP at 15cm H2O with EPAP about 5cm H2O",
                    notes: [
                        "Consider when patient is awake, cooperative and needs assistance with oxygenation and ventilation"
                ],

                },
                {
                    amount:"pediatric",
                    dosage: "",
                    notes: [
                        "ONLY use when patient is on machine at home. Maintain home settings and bring machine with the patient. If unable to adequately ventilate return to BVM or advance to intubation"
                    ]
                }
            ]
        }
    ]
}