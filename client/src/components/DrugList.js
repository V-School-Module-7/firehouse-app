import React from 'react';
import styled from 'styled-components';
import Button from '../components/ButtonDrug';



const DrugsWapper = styled.div``;
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    grid-gap: 20px;
    align-items: center;
    margin: 16px auto 0px auto;
    justify-content: center;
`;

const DrugButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    align-items: center;
    width: 100vw;
    margin: 16px auto 0px auto;
    justify-content: center;
    background-color:  #D8D8D8;
    padding-bottom: 20px;
`;

const Title = styled.div`
    height: auto;
    width: auto;
    font-weight: bold;
    font-size: 40px;
    line-height: 32px;
    margin: auto;
    text-align: center;
    color: #3233FF;
    padding: 20px 0 0 0;
`


function DrugList(props) {
   
    const amiodaroneInfo = [
        { name: "Cardiac Arrest", path: "/", icon: null},
        { name: "Post Cardiac Arrest/Return of Spontaneous Circulation ROSC", path: "/", icon: null},
        { name: "Tachycardia", path: "/", icon: null}
    ];
    const amiodaroneButtons = amiodaroneInfo.map((amiodaroneInfo, index) => (
        <Button 
            key={amiodaroneInfo + index}
            text={amiodaroneInfo.name}
            path={amiodaroneInfo.path}
        />
    ));
    const atropineInfo = [
        { name: "Beta Blocker Toxicity", path: "/", icon: null},
        { name: "Bradycardia", path: "/", icon: null}
    ];
    const atropineButtons = atropineInfo.map((atropineInfo, index) => (
        <Button 
            key={atropineInfo + index}
            text={atropineInfo.name}
            path={atropineInfo.path}
        />
    ));
    const bipapInfo = [
        { name: "Congestive Heart Failure/Pulmonary Edema", path: "/", icon: null},
        { name: "Respiratory Distress/Airway & Tracheostomy Management", path: "/", icon: null}
    ];
    const bipapButtons = bipapInfo.map((bipapInfo, index) => (
        <Button 
            key={bipapInfo + index}
            text={bipapInfo.name}
            path={bipapInfo.path}
        />
    ));
    const dextroseInfo = [
        { name: "Hypoglycemia/Altered Mental Status/Violent Patient", path: "/", icon: null},
        { name: "Newborn Resuscitation", path: "/", icon: null}
    ];
    const dextroseButtons = dextroseInfo.map((dextroseInfo, index) => (
        <Button 
            key={dextroseInfo + index}
            text={dextroseInfo.name}
            path={dextroseInfo.path}
        />
    ));
    const diazepamInfo = [
        { name: "Anxiety Management", path: "/", icon: null},
        { name: "Hyperthermia", path: "/", icon: null },
        { name: "Violent Patient", path: "/", icon: null},
    ];
    const diazepamButtons = diazepamInfo.map((diazepamInfo, index) => (
        <Button 
            key={diazepamInfo + index}
            text={diazepamInfo.name}
            path={diazepamInfo.path}
        />
    ));
    const epinephrineInfo = [
        { name: "Anaphylaxis", path: "/", icon: null},
        { name: "Anaphylaxis/Stridor", path: "/", icon: null},
        { name: "Bradycardia/Hypoperfusion/Snake Bite", path: "/", icon: null}
    ];
    const epinephrineButtons = epinephrineInfo.map((epinephrineInfo, index) => (
        <Button
            key={epinephrineInfo + index}
            text={epinephrineInfo.name}
            path={epinephrineInfo.path}
        />
    ));
    const epineInfo = [
        { name: "Anaphylactic Shock/Hypotension", path: "/", icon: null},
        { name: "Beta Blocker Toxicity - Bradycardia", path: "/", icon: null},
        { name: "Cardiac Arrest", path: "/", icon: null}
    ];
    const epineButtons = epineInfo.map((epineInfo, index) => (
        <Button 
            key={epineInfo + index}
            text={epineInfo.name}
            path={epineInfo.path}
        />
    ));
    const ketamineInfo = [
        { name: "Pain and Anxiety Management", path: "/", icon: null},
        { name: "Violent Patient", path: "/", icon: null},
    ];
    const ketamineButtons = ketamineInfo.map((ketamineInfo, index) => (
        <Button 
            key={ketamineInfo + index}
            text={ketamineInfo.name}
            path={ketamineInfo.path}
        />
    ));
    const lidocaineInfo = [
        { name: "Cardiac Arrest", path: "/", icon: null},
        { name: "IO Access In Conscious Patients", path: "/", icon: null },
        { name: "Post Cardiac Arrest/Return of Spontaneous Circulation (ROSC)", path: "/", icon: null },
        { name: "Post Cardiac Arrest/ROSC - After Lidocaine or Amiodarone Therapy", path: "/", icon: null },
        { name: "Respiratory Distress", path: "/", icon: null },
        { name: "Tachycardia With A Pulse", path: "/", icon: null}
    ];
    const lidocaineButtons = lidocaineInfo.map((lidocaineInfo, index) => (
        <Button 
            key={lidocaineInfo + index}
            text={lidocaineInfo.name}
            path={lidocaineInfo.path}
        />
    ));
    const lorazepamInfo = [
        { name: "Hyperthermia", path: "/", icon: null},
        { name: "Pain and Anxiety Management", path: "/", icon: null },
        { name: "Seizures", path: "/", icon: null },
        { name: "Violent Patient", path: "/", icon: null }
    ];
    const lorazepamButtons = lorazepamInfo.map((lorazepamInfo, index) => (
        <Button 
            key={lorazepamInfo + index}
            text={lorazepamInfo.name}
            path={lorazepamInfo.path}
        />
    ));
    const magnesiumInfo = [
        { name: "Cardiac Arrest", path: "/", icon: null },
        { name: "Respiratory Distress", path: "/", icon: null },
        { name: "Seizures", path: "/", icon: null }
    ];
    const magnesiumButtons = magnesiumInfo.map((magnesiumInfo, index) => (
        <Button 
            key={magnesiumInfo + index}
            text={magnesiumInfo.name}
            path={magnesiumInfo.path}
        />
    ));
    const midazolamInfo = [
        { name: "Anxiety Management", path: "/", icon: null },
        { name: "Hyperthermia", path: "/", icon: null },
        { name: "Seizures", path: "/", icon: null },
        { name: "Violent Patient", path: "/", icon: null }
    ];
    const midazolamButtons = midazolamInfo.map((midazolamInfo, index) => (
        <Button 
            key={midazolamInfo + index}
            text={midazolamInfo.name}
            path={midazolamInfo.path}
        />
    ));
    const morphineInfo = [
        { name: "Congestive Heart Failure", path: "/", icon: null },
        { name: "Pain and Anxiety Management", path: "/", icon: null }
    ];
    const morphineButtons = morphineInfo.map((morphineInfo, index) => (
        <Button 
            key={morphineInfo + index}
            text={morphineInfo.name}
            path={morphineInfo.path}
        />
    ));
    const salineInfo = [
        { name: "Burns", path: "/", icon: null },
        { name: "Burns (Parkland Formula", path: "/", icon: null },
        { name: "Cardiac Arrest", path: "/", icon: null },
        { name: "Cardiac Chest Pain/Acute Coronary Syndrome", path: "/", icon: null },
        { name: "Crush Injury", path: "/", icon: null },
        { name: "Hyperglycemia", path: "/", icon: null },
        { name: "Hyperthermia", path: "/", icon: null },
        { name: "Hypothermia", path: "/", icon: null },
        { name: "Kidney Failure/Dialysis patients", path: "/", icon: null },
        { name: "Non-Traumatic Shock", path: "/", icon: null },
        { name: "Pediatric Resuscitation", path: "/", icon: null },
        { name: "Traumatic Shock", path: "/", icon: null }
    ];
    const salineButtons = salineInfo.map((salineInfo, index) => (
        <Button 
           key={salineInfo + index}
           text={salineInfo.name}
           path={salineInfo.path} 
        />
    ))

    return(
        <DrugsWapper>
            <ButtonsContainer>
                <DrugButtonsContainer>
                    <Title>Acetaminophen/Tylenol</Title>
                    <Button text={"Dosages"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Adenosine</Title>
                    <Button text={"Narrow or Wide Complex Tachycardia"} path={"/"}/>
                    <Button text={"Synchronized Cardioversion"} path={"/"}/>
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Albuterol</Title>
                    <Button text={"Wheezing/Asthma/Anaphylaxis"} path={"/"}/>
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Amiodarone</Title>
                    {amiodaroneButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Aspirin</Title>
                    <Button text={"Dosages"} path={"/"}/>
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Atropine</Title>
                    {atropineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>BIPAP/CPAP</Title>
                    {bipapButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Calcium Gluconate Gel</Title>
                    <Button text={"Toxic Exposure-Hydrofluoric Acid"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Dextrose (Oral)</Title>
                    <Button text={"Dosages"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Dextrose 10%</Title>
                    {dextroseButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Dextrose 25%</Title>
                    <Button text={"Hypoglycemia"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Dextrose 50%</Title>
                    <Button text={"Hypoglycemia/Altered Mental Status/Violent Patient"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Diazepam (Valium)</Title>
                    {diazepamButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Diphenhydramine (Benadryl)</Title>
                    <Button text={"Moderate To Severe Allergic Reaction"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Epinephrine 1:1,000</Title>
                    {epinephrineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Epinephrine 1:10,000</Title>
                    {epineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Fentanyl</Title>
                    <Button text={"Pain and Anxiety Management"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Glucagon</Title>
                    <Button text={"Hypoglycemia"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Haloperidol (Haldol)</Title>
                    <Button text={"Violent Patient"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Ibuprofen (Motrin)</Title>
                    <Button text={"Dosages"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Ketamine (Ketalar)</Title>
                    {ketamineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Lidocaine</Title>
                    {lidocaineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Lorazepam (Ativan)</Title>
                    {lorazepamButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Magnesium Sulfate</Title>
                    {magnesiumButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Midazolam (Versed)</Title>
                    {midazolamButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Morphine Sulfate</Title>
                    {morphineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Naloxone (Narcan)</Title>
                    <Button 
                        text={"Overdose/Altered Mental Status/Violent Patient"}
                        path={"/"}
                    />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Nitroglycerin</Title>
                    <Button text={"Chest Pain"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Normal Saline</Title>
                    {salineButtons}
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Ondansetron (Zofran)</Title>
                    <Button text={"Nausea/Vomiting"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Oxytocin (Pitocin)</Title>
                    <Button text={"Dosages"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Procainamide</Title>
                    <Button 
                        text={"Stable Wide Complex Tachycardia"}
                        path={"/"}
                    />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Promethazine (Phenergan)</Title>
                    <Button text={"Nausea/Vomiting"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Sodium Bicarbonate</Title>
                    <Button text={"Overdose"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Synchronized Cardioversion</Title>
                    <Button text={"Energy Dose"} path={"/"} />
                </DrugButtonsContainer>

                <DrugButtonsContainer>
                    <Title>Transcutaneous Pacing</Title>
                    <Button text={"Rate/BPM"} path={"/"} />
                </DrugButtonsContainer>

            </ButtonsContainer>
        </DrugsWapper>
    )
}

export default DrugList
