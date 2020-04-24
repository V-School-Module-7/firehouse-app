export const synchronizedCardioversion = {
    type: "Synchronized Cardioversion",
    conditions: [
        {
            type: "unstable patient (tachycardic arrhythmia)",
            weights: [
                {
                    amount: "adult",
                    dosage: "see notes",
                    notes:[
                        "Initial energy dose:",
                        "Narrow Regular: 50-100J (Mono-phasic or Bi-phasic)",
                        "Narrow Irregular: 120-200J (Bi-phasic) and 200 J (Mono-phasic)",
                        "Wide Regular: 100J (Mono-phasic or Bi-phasic)",
                        "Wide Irregular: Defibrillate without synchronization",
                        "If no response, may increase energy dose to max 360J (Mono-phasic) or 200J (Bi-phasic)"
                    ]
                },
                {
                    amount:"pediatric",
                    dosage: "Initial energy dose: 0.5-1J/kg",
                    notes: [
                        "If no response, double energy dose to 2J/kg"
                    ]
                }
            ]
        }
    ]

}