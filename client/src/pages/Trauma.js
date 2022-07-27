import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/Button';
// import ButtonTrauma from '../components/ButtonTrauma';

import traumaPatientCareGuidelinesPDF from '../assets/pdf/protocols/trauma/01 Trauma Patient care Guidelines.pdf';
import utahTraumaFieldTriageGuidelinesPDF from '../assets/pdf/protocols/trauma/02 Utah Trauma Field Guidelines.pdf';
import guidelinesForTransport from '../assets/pdf/protocols/trauma/03 Guidelines for Transport of Trauma Patients to Freestanding Emergency Departments.pdf'
import generalTrauma from '../assets/pdf/protocols/trauma/04 General Trauma Management.pdf'
import amputationsToothAvulsionsPDF from '../assets/pdf/protocols/trauma/05 Amputation_ Tooth Avulsions.pdf';
import burnsThermalElectricalLightningPDF from '../assets/pdf/protocols/trauma/06 Burns - Electrical_ Thermal.pdf';
import headInjuryTraumaticBrainInjuryPDF from '../assets/pdf/protocols/trauma/07 Head Injury (Traumatic Brain Injury).pdf';
import hemorrhageControlExtremityAndCrushInjuriesPDF from '../assets/pdf/protocols/trauma/08 Hemorrhage Control, Extremity and Crush Injuries.pdf';
import nonAccidentalTraumaAbusePDF from '../assets/pdf/protocols/trauma/09 Non-Accidental Trauma_Abuse.pdf';
import snakeBitesPDF from '../assets/pdf/protocols/trauma/10 Snake Bites.pdf';
import selectiveSpineImmmobile from '../assets/pdf/protocols/trauma/11 Selective Spine Immobilization.pdf'

import Anchor from '../components/Anchor';

const TraumaWrapper = styled.div ``;
const SearchBarTrauma = styled(SearchBar)``;
const ButtonsContainer = styled.div`

display: flex;
flex-direction: column;
grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  align-items: center;
  `;

  function Trauma(props) {
      const ButtonInfo = [
          { label: 'Trauma Patient Care Guidelines', href: traumaPatientCareGuidelinesPDF, icon: null },
          { label: 'Utah Trauma Field Triage Guidelines', href: utahTraumaFieldTriageGuidelinesPDF, icon: null },
          { label: 'General Trauma', path: generalTrauma, icon: null },
          { label: 'Transport Guidelines', path: guidelinesForTransport, icon: null },
          { label: 'Amputations',href: amputationsToothAvulsionsPDF, icon: null },
          { label: 'Burns - Electrical/Thermal', href: burnsThermalElectricalLightningPDF, icon: null },
          { label: 'Head Injury(Traumatic Brain Injury)', href: headInjuryTraumaticBrainInjuryPDF, icon: null },
          { label: 'Hemorrhage Control and Soft Tissue Injuries', href: hemorrhageControlExtremityAndCrushInjuriesPDF, icon: null },
          { label: 'Non-Accidental Trauma/Abuse', href: nonAccidentalTraumaAbusePDF, icon: null },
          { label: 'Snake Bites', href: snakeBitesPDF, icon: null},
          { label: 'Skeletal Injuries', path: selectiveSpineImmmobile, icon: null }
      ];

      const displayButtons = ButtonInfo.map((buttonInfo, index) => {
        //  return <Button
        //   key={buttonInfo + index}
        //   text={buttonInfo.name}
        //   path={buttonInfo.path} />,

        //   <ButtonTrauma
        //   key={buttonInfo + index}
        //   text={buttonInfo.name}
        //   path={buttonInfo.path} />

        return <Anchor href={buttonInfo.href} target='__blank'>{buttonInfo.label}</Anchor>
          
      });

      return (
          <TraumaWrapper>
              <SearchBarTrauma />
              <ButtonsContainer>{displayButtons}</ButtonsContainer>
          </TraumaWrapper>
      );
  }

  export default Trauma;
