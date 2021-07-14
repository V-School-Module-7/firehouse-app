import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/buttonGeneral';
import Anchor from '../components/Anchor'

import PDF9 from '../assets/09 Shock, Sepsis, & Fluid Therapy.pdf'
import generalPatientGuidelinesPDF from '../assets/pdf/General-Patient-Guidelines.pdf'
import airwayTracheostomyManagementPDF from '../assets/pdf/Airway-and-Tracheostomy-Management.pdf'
import alteredMentalStatusPDF from '../assets/pdf/Altered-Mental-Status.pdf'
import deathDeterminationPDF from '../assets/pdf/Death-Determination-and-Termination-of-Resuscitation.pdf'
import familyCenteredCarePDF from '../assets/pdf/Family-Centered-Care.pdf'
import nauseaVomitingPDF from '../assets/pdf/Nausea-Vomiting.pdf'
import painAnxietyManagementPDF from '../assets/pdf/Pain-and-Anxiety-Management.pdf'
import pediatricAssessmentPDF from '../assets/pdf/Pediatric-Assessment.pdf'

const GeneralWrapper = styled.div ``;
const SearchBarGeneral = styled(SearchBar)``;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

function General(props) {
  const buttonInfo = [
    { label: '1. General Patient Care Guidelines', href: generalPatientGuidelinesPDF, icon: null },
    { label: '2. Airway and Tracheostomy Management', href: airwayTracheostomyManagementPDF, icon: null },
    { label: '3. Altered Mental Status', href: alteredMentalStatusPDF, icon: null },
    { label: '4. Death Determination and Pronouncement Process', href: deathDeterminationPDF, icon: null },
    { label: '5. Family Centered Care', href: familyCenteredCarePDF, icon: null },
    { name: '6. IV/IO Access', path: '/protocols/general', icon: null },
    { label: '7. Nausea/Vomiting', href: nauseaVomitingPDF, icon: null },
    { label: '8. Pain & Anxiety Management', href: painAnxietyManagementPDF, icon: null },
    { label: '9. Pediatric Assessment', href: pediatricAssessmentPDF, icon: null },
    { name: '10. Selective Spinal Immobilization', path: '/protocols/general', icon: null },
    { label: '11. Shock and Fluid Therapy', href: PDF9, icon: null }
  ];

  const displayButtons = buttonInfo.map((buttonInfo, index) => (
    // <Button
    //   key={buttonInfo + index}
    //   text={buttonInfo.name}
    //   path={buttonInfo.path}
    // />

    <Anchor href={buttonInfo.href} target="__blank">{buttonInfo.label}</Anchor>
  ));
  return (
    <div className='General'>
      <SearchBarGeneral />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </div>
  );
}

export default General;
