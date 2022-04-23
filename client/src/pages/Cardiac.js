import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/Button';
// import ButtonCardiac from '../components/ButtonCardiac';
import cardiacGuidePDF from '../assets/pdf/protocols/cardiac/01 Cardiac Patient Care Guidelines.pdf';
import cardiacArrest from '../assets/pdf/protocols/cardiac/02 Cardiac Arrest.pdf';
import bradycardiaPDF from '../assets/pdf/protocols/cardiac/03 Bradycardia.pdf'
import cardiacChestPainAcuteCoronarySyndromePDF from '../assets/pdf/protocols/cardiac/04 Chest Pain.pdf';
import congestiveHeartFailurePulmonaryEdemaPDF from '../assets/pdf/protocols/cardiac/05 Congestive Heart Failure_Pulmonary Edema.pdf';
import ekgInstructions from '../assets/pdf/protocols/cardiac/06 EKG Instructions.pdf'
import leftVentricularAssist from '../assets/pdf/protocols/cardiac/07 Left Ventricular Assist Device.pdf'
import newbornResuscitationPDF from '../assets/pdf/protocols/cardiac/08 Newborn Resuscitation.pdf';
import postCardiacArrest from '../assets/pdf/protocols/cardiac/09 Post Cardiac Arrest Return of Spontaneous Circulation.pdf'
import tachycardiaPDF from '../assets/pdf/protocols/cardiac/10 Tachycardia (With a Pulse).pdf';

import Anchor from '../components/Anchor';

const CardiacWrapper = styled.div ``;
const SearchBarCardiac = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

function Cardiac(props) {
    const ButtonInfo = [
        { label: 'Cardiac Patient Care Guidelines', href: cardiacGuidePDF, icon: null },
        { label: 'Cardiac Arrest', href: cardiacArrest, icon: null },
        { label: 'Bradycardia', href: bradycardiaPDF, icon: null },
        { label: 'Chest Pain', href:cardiacChestPainAcuteCoronarySyndromePDF , icon: null },
        { label: 'Congestive Heart Failure/Pulmonary Edema', href: congestiveHeartFailurePulmonaryEdemaPDF , icon: null },
        { label: 'EKG Instructions', path: ekgInstructions, icon: null },
        { label: 'Left Ventricular Assist Device', path: leftVentricularAssist, icon: null },
        { label: 'Newborn Resucitation',href: newbornResuscitationPDF , icon: null },
        { label: 'Post Cardiac Arrest Management/Therapeutic Hypothermia', path: postCardiacArrest, icon: null },
        { label: 'Tachycardia(With a Pulse)', href: tachycardiaPDF, icon: null }
    ];

    const displayButtons = ButtonInfo.map((buttonInfo, index) => {
    //  return <AnchorButton 
    //     key={buttonInfo + index}
    //     text={buttonInfo.label}
    //     href={buttonInfo.href} target='__blank'
    //      />

    //   <ButtonCardiac
    //     key={buttonInfo + index}
    //     text={buttonInfo.name}
    //     fileName={buttonInfo.fileName} />,

      return <Anchor href={buttonInfo.href} target='__blank'>{buttonInfo.label}</Anchor>

    });

    return (
      <CardiacWrapper>
        <SearchBarCardiac />
        <ButtonsContainer>{displayButtons}</ButtonsContainer>
      </CardiacWrapper>
    );
}

export default Cardiac;