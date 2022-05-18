import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const DrugsWapper = styled.div``;
const SearchBarDrugs = styled(SearchBar);
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
`;

const DrugButtonsContainer = styled.div`
    display: grid;
    grid template-columns: 154px 154px;
    grid-auto rows: auto;
    grid-gap: 20px;
    width: 100vw;
    margin: 16px auto 0px auto;
    justify-content: center;
    background-color:  #D8D8D8;
`;

function Drugs(props) {
  const amiodaroneInfo = [
    { name: "Cardiac Arrest", path: "/", icon: null },
    {
      name: "Post Cardiac Arrest/Return of Spontaneous Circulation ROSC",
      path: "/",
      icon: null,
    },
    { name: "Tachycardia", path: "/", icon: null },
  ];
  const amiodaroneButtons = amiodaroneInfo.map((amiodaroneInfo, index) => (
    <Button
      key={amiodaroneInfo + index}
      text={amiodaroneInfo.name}
      path={amiodaroneInfo.path}
    />
  ));
  const atropineInfo = [
    { name: "Beta Blocker Toxicity", path: "/", icon: null },
    { name: "Bradycardia", path: "/", icon: null },
  ];
  const atropineButtons = atropineInfo.map((atropineInfo, index) => (
    <Button
      key={atropineInfo + index}
      text={atropineInfo.name}
      path={atropineInfo.path}
    />
  ));
  const bipapInfo = [
    { name: "Congestive Heart Failure/Pulmonary Edema", path: "/", icon: null },
    {
      name: "Respiratory Distress/Airway & Tracheostomy Management",
      path: "/",
      icon: null,
    },
  ];
  const bipapButtons = bipapInfo.map((bipapInfo, index) => (
    <Button
      key={bipapInfo + index}
      text={bipapInfo.name}
      path={bipapInfo.path}
    />
  ));
  const dextroseInfo = [
    {
      name: "Hypoglycemia/Altered Mental Status/Violent Patient",
      path: "/",
      icon: null,
    },
    { name: "Newborn Resuscitation", path: "/", icon: null },
  ];
  const dextroseButtons = dextroseInfo.map((dextroseInfo, index) => (
    <Button
      key={dextroseInfo + index}
      text={dextroseInfo.name}
      path={dextroseInfo.path}
    />
  ));
  const diazepamInfo = [
    { name: "Anxiety Management", path: "/", icon: null },
    { name: "Hyperthermia", path: "/", icon: null },
    { name: "Violent Patient", path: "/", icon: null },
  ];
  const diazepamButtons = diazepamInfo.map((diazepamInfo, index) => (
    <Button
      key={diazepamInfo + index}
      text={diazepamInfo.name}
      path={diazepamInfo.path}
    />
  ));
  const epinephrineInfo = [
    { name: "Anaphylaxis", path: "/", icon: null },
    { name: "Anaphylaxis/Stridor", path: "/", icon: null },
    { name: "Bradycardia/Hypoperfusion/Snake Bite", path: "/", icon: null },
  ];
  const epineInfo = [
    { name: "Anaphylactic Shock/Hypotension", path: "/", icon: null },
    { name: "Beta Blocker Toxicity - Bradycardia", path: "/", icon: null },
    { name: "Cardiac Arrest", path: "/", icon: null },
  ];
  const epineButtons = epineInfo.map((epineInfo, index) => (
    <Button
      key={epineInfo + index}
      text={epineInfo.name}
      path={epineInfo.path}
    />
  ));
  const ketamineInfo = [
    { name: "Pain and Anxiety Management", path: "/", icon: null },
    { name: "Violent Patient", path: "/", icon: null },
  ];
  const ketamineButtons = ketamineInfo.map((ketamineInfo, index) => (
    <Button
      key={ketamineInfo + index}
      text={ketamineInfo.name}
      path={ketamineInfo.path}
    />
  ));
  const lidocaineInfo = [
    { name: "Cardiac Arrest", path: "/", icon: null },
    { name: "IO Access In Conscious Patients", path: "/", icon: null },
    {
      name: "Post Cardiac Arrest/Return of Spontaneous Circulation (ROSC)",
      path: "/",
      icon: null,
    },
    {
      name: "Post Cardiac Arrest/ROSC - After Lidocaine or Amiodarone Therapy",
      path: "/",
      icon: null,
    },
    { name: "Respiratory Distress", path: "/", icon: null },
    { name: "Tachycardia With A Pulse", path: "/", icon: null },
  ];
  const lidocaineButtons = lidocaineInfo.map((lidocaineInfo, index) => (
    <Button
      key={lidocaineInfo + index}
      text={lidocaineInfo.name}
      path={lidocaineInfo.path}
    />
  ));
  const lorazepamInfo = [
    { name: "Hyperthermia", path: "/", icon: null },
    { name: "Pain and Anxiety Management", path: "/", icon: null },
    { name: "Seizures", path: "/", icon: null },
    { name: "Violent Patient", path: "/", icon: null },
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
    { name: "Seizures", path: "/", icon: null },
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
    { name: "Violent Patient", path: "/", icon: null },
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
    { name: "Pain and Anxiety Management", path: "/", icon: null },
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
    {
      name: "Cardiac Chest Pain/Acute Coronary Syndrome",
      path: "/",
      icon: null,
    },
    { name: "Crush Injury", path: "/", icon: null },
    { name: "Hyperglycemia", path: "/", icon: null },
    { name: "Hyperthermia", path: "/", icon: null },
    { name: "Hypothermia", path: "/", icon: null },
    { name: "Kidney Failure/Dialysis patients", path: "/", icon: null },
    { name: "Non-Traumatic Shock", path: "/", icon: null },
    { name: "Pediatric Resuscitation", path: "/", icon: null },
    { name: "Traumatic Shock", path: "/", icon: null },
  ];
  const salineButtons = salineInfo.map((salineInfo, index) => (
    <Button
      key={salineInfo + index}
      text={salineInfo.name}
      path={salineInfo.path}
    />
  ));

  return (
    <DrugsWapper>
      <SearchBarDrugs />
      <ButtonsContainer>{salineButtons}</ButtonsContainer>
    </DrugsWapper>
  );
}

export default Drugs;
