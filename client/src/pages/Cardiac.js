import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import ButtonCardiac from '../components/ButtonCardiac';

const CardiacWrapper = styled.div ``;
const SearchBarCardiac = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 135px 135px;
  grid-auto-rows: auto;
  grid-gap: 135px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

function Cardiac(props) {
    const ButtonInfo = [
        { name: 'Cardiac Patient Care Guidelines', path: '/protocols/cardiac', icon: null },
        { name: 'Bradycardia', path: '/protocols/cardiac', icon: null },
        { name: 'Cardiac Chest Pain/ Acute Coronary Syndrome', path: '/protocols/cardiac', icon: null },
        { name: 'Congestive Heart Failure/Pulmonary Edema', path: '/protocols/cardiac', icon: null },
        { name: 'EKG Instructions', path: '/protocols/cardiac', icon: null },
        { name: 'Left Ventricular Assist Device', path: 'protocols/cardiac', icon: null },
        { name: 'Newborn Resucitation', path: '/prototcols/cardia', icon: null },
        { name: 'Post Cardiac Arrest Management/Therapeutic Hypothermia', path: '/protocols/cardiac', icon: null },
        { name: 'Pulseless Arrest Nonshockable Rhythm', path: '/protocols/cardiac', icon: null },
        { name: 'Pulseless Arrest: Shockable Rhythm(V-Fib/Pulseless V-Tach)', path: '/protocols/cardiac', icon: null },
        { name: 'Tachycardia(With a Pulse)', path: '/protocols/cardiac', icon: null }
    ];

    const displayButtons = ButtonInfo.map((buttonInfo, index) => {
     return <Button 
        key={buttonInfo + index}
        text={buttonInfo.name}
        path={buttonInfo.path} />,

      <ButtonCardiac
        key={buttonInfo + index}
        text={buttonInfo.name}
        path={buttonInfo.path} />
      

    });

    return (
      <CardiacWrapper>
        <SearchBarCardiac />
        <ButtonsContainer>{displayButtons}</ButtonsContainer>
      </CardiacWrapper>
    );
}

export default Cardiac;