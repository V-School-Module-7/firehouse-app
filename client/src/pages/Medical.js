import React from 'react';
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
// import Button from '../components/Button'
import Anchor from '../components/Anchor'

import medicalGuidelinesPDF from '../assets/pdf/Medical-Patient-Care-Guidelines.pdf'
import allergicReactionPDF from '../assets/pdf/Allergic-Reaction-Anaphylaxis.pdf'
import drowningSubmersionPDF from '../assets/pdf/Drowning-or-Submersion.pdf'
import feverManagementPDF from '../assets/pdf/Fever-Management.pdf'
import glucoseEmergenciesPDF from '../assets/pdf/Glucose-Emergencies-Hypoglycemia-Hyperglycemia.pdf'
import obstetricalEmergenciesPDF from '../assets/pdf/Obstetrical-Emergencies.pdf'
import OverdosePDF from '../assets/pdf/Opioid-Overdose.pdf'
import respiratoryDistressPDF from '../assets/pdf/Respiratory-Distress.pdf'
import SeizuresPDF from '../assets/pdf/Seizures.pdf'
import StrokePDF from '../assets/pdf/Suspected-Stroke.pdf'
import temperatureEmergenciesPDF from '../assets/pdf/Temperature-and-Environmental-Emergencies.pdf'
import carbonMonoxidePDF from '../assets/pdf/Toxic-Exposure-Carbon-Monoxide.pdf'
import CyanideExposurePDF from '../assets/pdf/Toxic-Exposure-Cyanide.pdf'
import HydroflouricAcidPDF from '../assets/pdf/Toxic-Exposure-Hydrofluoric-Acid.pdf'
import OrganophosphatesPDF from '../assets/pdf/Toxic-Exposure-Organophosphates-Nerve-Agents.pdf'
import violentPatientPDF from '../assets/pdf/Violent-Patient-Chemical-Sedation-Taser-Barb-Removal.pdf'

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
    {label: "Children With Special Healthcare Needs", href: "", icon: null},
    {label: "Drowning or Submersion", href: drowningSubmersionPDF, icon: null},
    {label: "Fever Management", href: feverManagementPDF, icon: null},
    {label: "Glucose Emergencies Hypoglycemia/Hyperglycemia", href: glucoseEmergenciesPDF, icon: null},
    {label: "Immunocompromised Patients", href: "", icon: null},
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