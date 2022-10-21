import React from 'react';
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
// import Button from '../components/Button'
import Anchor from '../components/Anchor'

import medicalGuidelinesPDF from '../assets/pdf/protocols/medical/01 Medical Patient Care Guidelines.pdf'
import allergicReactionPDF from '../assets/pdf/protocols/medical/02 Allergic reactions_Anaphylaxis.pdf'
import betaBlockerToxicity from '../assets/pdf/protocols/medical/03 Beta Blocker Toxicity.pdf'
import childrenWithSpecialNeeds from '../assets/pdf/protocols/medical/04 Children with Special Health care Needs.pdf'
import drowningSubmersionPDF from '../assets/pdf/protocols/medical/05 Drowning or Submersion.pdf'
import feverManagementPDF from '../assets/pdf/protocols/medical/06 Fever Management.pdf'
import glucoseEmergenciesPDF from '../assets/pdf/protocols/medical/07 Glucose Emergencies_ Hypogylcemia _ Hyperglycemia.pdf'
import immunocompromisedPatients from '../assets/pdf/protocols/medical/08 Immunocompromised Patients.pdf'
import obstetricalEmergenciesPDF from '../assets/pdf/protocols/medical/09 Obstetrical Emergencies.pdf'
import OverdosePDF from '../assets/pdf/protocols/medical/10 Overdose.pdf'
import respiratoryDistressPDF from '../assets/pdf/protocols/medical/11 Respiratory Distress.pdf'
import SeizuresPDF from '../assets/pdf/protocols/medical/12 Seizures.pdf'
import StrokePDF from '../assets/pdf/protocols/medical/13 Suspected Stroke.pdf'
import temperatureEmergenciesPDF from '../assets/pdf/protocols/medical/14 Temperature and Evnironmental Emergencies.pdf'
import carbonMonoxidePDF from '../assets/pdf/protocols/medical/15 Toxic Exposure - Carbon Monoxide.pdf'
import CyanideExposurePDF from '../assets/pdf/protocols/medical/16 Toxic Exposure - Cyanide.pdf'
import HydroflouricAcidPDF from '../assets/pdf/protocols/medical/17 Toxic Exposure = Hydrofluoric Acid.pdf'
import OrganophosphatesPDF from '../assets/pdf/protocols/medical/18 Toxic Exposure - Organophosphate_Nerve Agents.pdf'
import violentPatientPDF from '../assets/pdf/protocols/medical/19 Violent Patient_Chemical Sedation_TASER Barb Removal.pdf'

const MedWrapper = styled.div``;
const SearchBarMedical = styled(SearchBar);
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  align-items: center;
`;

function Medical(props){
  const buttonInfo = [
    {label: 'Medical Patient Care Guidelines', href: medicalGuidelinesPDF, icon: null},
    {label: "Allergic Reaction/Anaphylaxis", href: allergicReactionPDF, icon: null},
    {label: "Beta Blocker Toxicity", href: betaBlockerToxicity, icon: null},
    {label: "Children With Special Healthcare Needs", href: childrenWithSpecialNeeds, icon: null},
    {label: "Drowning or Submersion", href: drowningSubmersionPDF, icon: null},
    {label: "Fever Management", href: feverManagementPDF, icon: null},
    {label: "Glucose Emergencies Hypoglycemia/Hyperglycemia", href: glucoseEmergenciesPDF, icon: null},
    {label: "Immunocompromised Patients", href: immunocompromisedPatients, icon: null},
    {label: "Obstetrical Emergencies", href: obstetricalEmergenciesPDF, icon: null},
    {label: "Overdose", href: OverdosePDF, icon: null},
    {label: "Respiratory Distress", href: respiratoryDistressPDF, icon: null},
    {label: "Seizures", href: SeizuresPDF, icon: null},
    {label: "Stroke or Neurological Deficits", href: StrokePDF, icon: null},
    {label: "Temperature & Environmental Emergencies", href: temperatureEmergenciesPDF, icon: null},
    {label: "Toxic Exposure - Carbon Monoxide/Smoke Exposure", href: carbonMonoxidePDF, icon: null},
    {label: "Toxic Exposure - Cyanide", href: CyanideExposurePDF, icon: null},
    {label: "Toxic Exposure - Hydroflouric Acid", href: HydroflouricAcidPDF, icon: null},
    {label: "Toxic Exposure - Organophosphates/Nerve Agents", href: OrganophosphatesPDF, icon: null},
    {label: "Violent Patient/Chemical Sedation", href: violentPatientPDF, icon: null}
  ]

    const displayButtons = buttonInfo.map((buttonInfo, index) => (
        // <Button
        //   key={buttonInfo.name + index}
        //   text={buttonInfo.name}
        //   path={buttonInfo.path}
        // />

       <Anchor href={buttonInfo.href} target="__blank">{buttonInfo.label}</Anchor>
    ));


    return(
        <MedWrapper>
            <SearchBarMedical />
            <ButtonsContainer>{displayButtons}</ButtonsContainer>
        </MedWrapper>
    )
}

export default Medical