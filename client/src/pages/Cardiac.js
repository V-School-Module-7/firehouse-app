import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import Button from '../components/Button';
// import ButtonCardiac from '../components/ButtonCardiac';
import cardiacGuidePDF from '../assets/pdf/cardiac-patient-care.pdf';
import bradycardiaPDF from '../assets/pdf/bradycardia.pdf';
import cardiacChestPainAcuteCoronarySyndromePDF from '../assets/pdf/cardiac-chest-pain-acute-coronary-syndrome.pdf';
import congestiveHeartFailurePulmonaryEdemaPDF from '../assets/pdf/congestive-heart-failure-pulmonary-edema.pdf';
import newbornResuscitationPDF from '../assets/pdf/newborn-resuscitation.pdf';
import tachycardiaPDF from '../assets/pdf/tachycardia.pdf';
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
        { label: 'Bradycardia', href: bradycardiaPDF, icon: null },
        { label: 'Cardiac Chest Pain/ Acute Coronary Syndrome', href:cardiacChestPainAcuteCoronarySyndromePDF , icon: null },
        { label: 'Congestive Heart Failure/Pulmonary Edema', href: congestiveHeartFailurePulmonaryEdemaPDF , icon: null },
        { label: 'EKG Instructions', path: '/protocols/cardiac', icon: null },
        { label: 'Left Ventricular Assist Device', path: 'protocols/cardiac', icon: null },
        { label: 'Newborn Resucitation',href: newbornResuscitationPDF , icon: null },
        { label: 'Post Cardiac Arrest Management/Therapeutic Hypothermia', path: '/protocols/cardiac', icon: null },
        { label: 'Pulseless Arrest Nonshockable Rhythm', path: '/protocols/cardiac', icon: null },
        { label: 'Pulseless Arrest: Shockable Rhythm(V-Fib/Pulseless V-Tach)', path: '/protocols/cardiac', icon: null },
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