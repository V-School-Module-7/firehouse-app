import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/buttonGeneral';
import Anchor from '../components/Anchor'

import generalPatientGuidelinesPDF from '../assets/pdf/protocols/general/01 General Patient Care Guidelines.pdf' 
import airwayTracheostomyManagementPDF from '../assets/pdf/protocols/general/02 Airway and Tracheostomy Management.pdf'
import alteredMentalStatusPDF from '../assets/pdf/protocols/general/03 Altered Mental Status.pdf'
import deathDeterminationPDF from '../assets/pdf/protocols/general/04 Death Determination and Termination of Resuscitation.pdf'
import familyCenteredCarePDF from '../assets/pdf/protocols/general/05 Family Centered Care.pdf'
import ivIoAccess from '../assets/pdf/protocols/general/06 IV_IO Access.pdf'
import nauseaVomitingPDF from '../assets/pdf/protocols/general/07 Nausea_Vomiting.pdf'
import painAnxietyManagementPDF from '../assets/pdf/protocols/general/08 Pain and Anxiety Management.pdf'
import pediatricAssessmentPDF from '../assets/pdf/protocols/general/09 Pediatric Assessment.pdf'
import PDF9 from '../assets/pdf/protocols/general/10 Shock and Fluid Therapy.pdf'

//const GeneralWrapper = styled.div ``;
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
    { label: '6. IV/IO Access', path: ivIoAccess, icon: null },
    { label: '7. Nausea/Vomiting', href: nauseaVomitingPDF, icon: null },
    { label: '8. Pain & Anxiety Management', href: painAnxietyManagementPDF, icon: null },
    { label: '9. Pediatric Assessment', href: pediatricAssessmentPDF, icon: null },
    // { label: '10. Selective Spinal Immobilization', path: '/protocols/general', icon: null },
    { label: '10. Shock and Fluid Therapy', href: PDF9, icon: null }
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
