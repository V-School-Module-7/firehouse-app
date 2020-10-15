import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/Button';
// import ButtonTrauma from '../components/ButtonTrauma';
import traumaPatientCareGuidelinesPDF from '../assets/pdf/trauma-patient-care-guidelines.pdf';
import utahTraumaFieldTriageGuidelinesPDF from '../assets/pdf/utah-trauma-field-triage-guidelines.pdf';
import amputationsToothAvulsionsPDF from '../assets/pdf/amputations-tooth-avulsions.pdf';
import burnsThermalElectricalLightningPDF from '../assets/pdf/burns-thermal-electrical-lightning.pdf';
import headInjuryTraumaticBrainInjuryPDF from '../assets/pdf/head-injury-traumatic-brain-injury.pdf';
import hemorrhageControlExtremityAndCrushInjuriesPDF from '../assets/pdf/hemorrhage-control-extremity-and-crush-injuries.pdf';
import nonAccidentalTraumaAbusePDF from '../assets/pdf/non-accidental-trauma-abuse.pdf';
import snakeBitesPDF from '../assets/pdf/snake-bites.pdf';
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
          { label: 'Amputations',href: amputationsToothAvulsionsPDF, icon: null },
          { label: 'Burns - Electrical/Thermal', href: burnsThermalElectricalLightningPDF, icon: null },
          { label: 'Chest Trauma', path: '/protocols/trauma', icon: null },
          { label: 'Crush Injuries', path: 'protocols/trauma', icon: null },
          { label: 'Head Injury(Traumatic Brain Injury)', href: headInjuryTraumaticBrainInjuryPDF, icon: null },
          { label: 'Hemorrhage Control and Soft Tissue Injuries', href: hemorrhageControlExtremityAndCrushInjuriesPDF, icon: null },
          { label: 'Non-Accidental Trauma/Abuse', href: nonAccidentalTraumaAbusePDF, icon: null },
          { label: 'Skeletal Injuries', path: '/protocols/trauma', icon: null },
          { label: 'Snake Bites', href: snakeBitesPDF, icon: null}
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
