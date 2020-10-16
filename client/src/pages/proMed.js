import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/buttonGeneral';
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

const MedicalWrapper = styled.div ``;
const SearchBarMedical = styled(SearchBar)``;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  align-items: center;
`;

  function Medical(props) {
      const ButtonInfo = [
          { label: '1. Medical Patient Care Guidelines', href: medicalGuidelinesPDF, icon: null },
          { label: '2. Allergic Reaction/Anaphylaxis', href: allergicReactionPDF, icon: null },
          { label: '3. Children with Special Healthcare Needs', href: '/protocols/medical', icon: null },
          { label: '4. Drowning or Submersion', href: drowningSubmersionPDF, icon: null },
          { label: '5. Fever Management', href: feverManagementPDF, icon: null },
          { label: '6. Glucose Emergencies: Hypoglycemia/Hyperglycemia', href: glucoseEmergenciesPDF, icon: null },
          { label: '7. Immunocompromised Patients', href: '/protocols/medical', icon: null },
          { label: '8. Obstetrical Emergencies', href: obstetricalEmergenciesPDF, icon: null },
          { label: '9. Overdose', href: OverdosePDF, icon: null },
          { label: '10. Respiratory Distress', href: respiratoryDistressPDF, icon: null },
          { label: '11. Seizures', href: SeizuresPDF, icon: null },
          { label: '12. Stroke or Neurological Deficits', href: StrokePDF, icon: null },
          { label: '13. Tempurature and Environmental Emergencies', href: temperatureEmergenciesPDF, icon: null },
          { label: '14. Toxic Exposure - Carbon Monoxide/Smoke Exposure', href: carbonMonoxidePDF, icon: null },
          { label: '15. Toxic Exposure - Cyanide', href: CyanideExposurePDF, icon: null },
          { label: '16. Toxic Exposure - Hydrofluoric Acid', href: HydroflouricAcidPDF, icon: null },
          { label: '17. Toxic Exposure - Organophosphates/Nerve Agents', href: OrganophosphatesPDF, icon: null },
          { label: '18. Violent Patient/Chemical Sedation', href: violentPatientPDF, icon: null }
      ];

      const displayButtons = ButtonInfo.map((buttonInfo, index) => {
        //  return <Button
        //   key={buttonInfo + index}
        //   text={buttonInfo.name}
        //   path={buttonInfo.path} />

         return <Anchor href={buttonInfo.href} target="__blank">{buttonInfo.label}</Anchor>
      });

      return (
          <MedicalWrapper>
              <SearchBarMedical />
              <ButtonsContainer>{displayButtons}</ButtonsContainer>
          </MedicalWrapper>
      );
  }

  export default Medical;