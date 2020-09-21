import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const CardiacWrapper = styled.div ``;
const SearchBarCardiac = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

function Cardiac(props) {
    const ButtonInfo = [
        { name: '1. Cardiac Patient Care Guidelines', path: '/protocols/cardiac', icon: null },
        { name: '2. Bradycardia', path: '/protocols/cardiac', icon: null },
        { name: '3. Cardiac Chest Pain/ Acute Coronary Syndrome', path: '/protocols/cardiac', icon: null },
        { name: '4. Congestive Heart Failure/Pulmonary Edema', path: '/protocols/cardiac', icon: null },
        { name: '5. EKG Instructions', path: '/protocols/cardiac', icon: null },
        { name: '6. Left Ventricular Assist Device', path: 'protocols/cardiac', icon: null },
        { name: '7. Newborn Resucitation', path: '/prototcols/cardia', icon: null },
        { name: '8. Post Cardiac Arrest Management/Therapeutic Hypothermia', path: '/protocols/cardiac', icon: null },
        { name: '9. Pulseless Arrest Nonshockable Rhythm', path: '/protocols/cardiac', icon: null },
        { name: '10. Pulseless Arrest: Shockable Rhythm(V-Fib/Pulseless V-Tach)', path: '/protocols/cardiac', icon: null },
        { name: '11. Tachycardia(With a Pulse)', path: '/protocols/cardiac', icon: null }
    ];

    const displayButtons = ButtonInfo.map((buttonInfo, index) => {
     return <Button 
        key={buttonInfo + index}
        text={buttonInfo.name}
        path={buttonInfo.path}
      />
    });

    return (
      <CardiacWrapper>
        <SearchBarCardiac />
        <ButtonsContainer>{displayButtons}</ButtonsContainer>
      </CardiacWrapper>
    );
}

export default Cardiac;