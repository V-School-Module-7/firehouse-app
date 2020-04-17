export const synchronizedCardioversion = {
    type: "Synchronized Cardioversion",
    conditions: [
        {
            type: "unstable tachycardic arrhythmia patient",
            weights: [
                {
                    amount: "adult",
                    //several dosages depending on 4 types
                    dosage: "",
                    notes: "If no response, may increase energy dose to max 360J (mono-phasic) or 200 J (bi-phasic)"
                },
                {
                    amount:"pediatric",
                    dosage: "0.5-1 J/kg (Initial energy dose)",
                    notes: "If no response, double energy dose to 2 J/kg"
                }
            ]
        }
    ]

}