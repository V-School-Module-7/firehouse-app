import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const GeneralWrapper = styled.div ``;
const SearchBarGeneral = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

function General(props) {
  const buttonInfo = [
    { name: '1. General Patient Care Guidelines', path: '/protocols/general', icon: null },
    { name: '2. Airway and Tracheostomy Management', path: '/protocols/general', icon: null },
    { name: '3. Altered Mental Status', path: '/protocols/general', icon: null },
    { name: '4. Death Determination and Pronouncement Process', path: '/protocols/general', icon: null },
    { name: '5. Family Centered Care', path: '/protocols/general', icon: null },
    { name: '6. IV/IO Access', path: '/protocols/general', icon: null },
    { name: '7. Nausea/Vomiting', path: '/protocols/general', icon: null },
    { name: '8. Pain & Anxiety Management', path: '/protocols/general', icon: null },
    { name: '9. Pediatric Assessment', path: '/protocols/general', icon: null },
    { name: '10. Selective Spinal Immobilization', path: '/protocols/general', icon: null },
    { name: '11. Shock and Fluid Therapy', path: '/protocols/general', icon: null }
  ];

  const displayButtons = buttonInfo.map((buttonInfo, index) => (
    <Button
      key={buttonInfo + index}
      text={buttonInfo.name}
      path={buttonInfo.path}
    />
  ));
  return (
    <GeneralWrapper>
      <SearchBarGeneral />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </GeneralWrapper>
  );
}

export default General;
