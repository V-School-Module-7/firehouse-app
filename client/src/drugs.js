const drugsArray = [
    {
        name: "Acetominophen/Tylenol", 
        symptoms: ["dosages"] 
    },
    {
        name: "Adenosine",
        symptoms: ["Supraventricular Tachycardia"]
    },
    {
        name: "Albuterol",
        symptoms: ["Wheezing/Asthma?anaphylaxis"]
    },
    {
        name: "Amiodarone",
        symptoms: [
            "Cardiac Arrest",
            "Post Cardiac Arrest/Return of Spontaneous Circulation (ROSC)",
            "Tachycardia"
        ]
    },
    {
        name: "Aspirin",
        symptoms: ["Dosages"]
    },
    {
        name:"Atropine",
        symptoms: [
            "Beta Blocker Toxicity",
            "Bradycardia"
        ]
    },
    {
        name: "BIPAP/CPAP",
        symptoms: [
            "Congestive Heart Failure/Pulmonary Edema",
            "Respiratory Distress/Airway & Tracheostomy Management"
        ]
    },
    {
        name: "Calcium Gluconate Gel",
        symptoms: ["Toxic Exposure-Hydrofluoric Acid"]
    },
    {
        name: "Dextrose (Oral)",
        symptoms: ["Dosages"]
    },
    {
        name: "Dextrose 10%",
        symptoms: [
            "Hypoglycemia/Altered Mental Status/Violent Patient",
            "Newborn Resuscitation"
        ]
    },
    {
        name: "Dextrose 25%",
        symptoms: ["Hypoglycemia"]
    },
    {
        name: "Dextrose 50%",
        symptoms: ["Hypoglycemia/Altered Mental Status/Violent Patient"]
    },
    {
        name: "Diazepam (Valium)",
        symptoms: [
            "Anxiety Management",
            "Hyperthermia",
            "Violent Patient"
        ]
    },
    {
        name: "Diphenhydramine (Benadryl)",
        symptoms: [
            "Moderate To Severe Allergic Reaction"
        ]
    },
    {
        name: "Epinephrine 1:1,000",
        symptoms: [
            "Anaphylaxis",
            "Anaphylaxis/Stridor",
            "Bradycardia/Hypoperfusion/Snake Bite"
        ]
    },
    {
        name:"Epinephrine 1:10,000",
        symptoms: [
            "Anaphylactic Shock/Hypotension",
            "Beta Blocker Toxicity - Bradycardia",
            "Cardiac Arrest"
        ]
    },
    {
        name: "Fentanyl",
        symptoms: [
            "Pain and Anxiety Management"
        ]
    },
    {
        name: "Glucagon",
        symptoms: [
            "Hypoglycemia"
        ]
    },
    {
        name: "Haloperidol (Haldol)",
        symptoms: [
            "Violent Patient"
        ]
    },
    {
        name: "Ibuprofen (Motrin)",
        symptoms: [
            "Dosages"
        ]
    },
    {
        name: "Ketamine (Ketalar)",
        symptoms: [
            "Pain and Anxiety Management",
            "Violent Patient"
        ]
    },
    {
        name: "Lidocaine",
        symptoms: [
            "Cardiac Arrest",
            "IO Access in Conscious Patients",
            "Post Cardiac Arrest/Return of Spontaneous Circulation(ROSC)",
            "Post Cardiac Arrest/ROSC - After Lidocaine or Amiodarone Therapy",
            "Respiratory Distress",
            "Tachycardia With A Pulse"
        ]
    },
    {
        name: "Lorazepam (Ativan)",
        symptoms: [
            "Hyperthermia",
            "Pain and Anxiety Management",
            "Seizures",
            "Violent Patient"
        ]
    },
    {
        name: "Magnesium Sulfate",
        symptoms: [
            "Cardiac Arrest",
            "Respiratory Distress",
            "Seizures"
        ]
    },
    {
        name: "Midazolam (Versed)",
        symptoms: [
            "Anxiety Management",
            "Hyperthermia",
            "Seizures",
            "Violent Patient"
        ]
    },
    {
        name: "Morphine Sulfate",
        symptoms: [
            "Congestive Heart Failure",
            "Pain and Anxiety Management"
        ]
    },
    {
        name: "Naloxone (Narcan)",
        symptoms: [
            "Overdose/Altered Mental Status/Violent Patient"
        ]
    },
    {
        name: "Nitroglycerin",
        symptoms: [
            "Chest Pain"
        ]
    },
    {
        name: "Normal Saline",
        symptoms: [
            "Burns",
            "Burns (Parkland Formula)",
            "Cardiac Arrest",
            "Cardiac Chest Pain/Acute Coronary Syndrome",
            "Congestive Heart Failure/Pulmonary Edema",
            "Crush Injury",
            "Hyperglycemia",
            "Hyperthermia",
            "Hypothermia",
            "Kidney Failure/Dialysis Patients",
            "Non-Traumatic Shock",
            "Pediatric Resuscitation",
            "Traumatic Shock"
        ]
    },
    {
        name: "Ondansetron (Zofran)",
        symptoms: [
            "Nausea/Vomiting"
        ]
    },
    {
        name: "Oxytocin (Pitocin)",
        symptoms: [
            "Dosages"
        ]
    },
    {
        name: "Procainamide",
        symptoms: [
            "Stable Wide Complex Tachycardia"
        ]
    },
    {
        name: "Promethazine (Phenergan)",
        symptoms: [
            "Nausea/Vomiting"
        ]
    },
    {
        name: "Sodium Bicarbonate",
        symptoms: [
            "Overdose"
        ]
    },
    {
        name: "Synchronized Cardioversion",
        symptoms: [
            "Energy Dose"
        ]
    },
    {
        name: "Tranexamic Acid (TXA)",
        symptoms: [
            "Significant Trauma & Signs/Risk of Instability"
        ]
    },
    {
        name: "Transcutaneous Pacing",
        symptoms: [
            "Rate/BPM"
        ]
    }
    
]

module.exports = drugsArray

// var db = firebase.firestore();
// var batch = db.batch()

//   ARRAYNAME.forEach((doc) => {
//     var docRef = db.collection("drugs").doc(); //automatically generate unique id
//     batch.set(docRef, doc);
//   });
//   return batch.commit();