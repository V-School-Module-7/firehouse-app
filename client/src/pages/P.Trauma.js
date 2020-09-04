import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const TraumaWrapper = styled.div ``;
const SearchBarTrauma = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

  function Trauma(props) {
      const ButtonInfo = [
          { name: '1. Trauma Patient Care Guidelines', path: '/protocols/trauma', icon: null },
          { name: '2. Utah Trauma Field Triage Guidelines', path: '/protocols/trauma', icon: null },
          { name: '3. Amputations', path: '/protocols/trauma', icon: null },
          { name: '4. Burns - Electrical/Thermal', path: '/protocols/trauma', icon: null },
          { name: '5. Chest Trauma', path: '/protocols/trauma', icon: null },
          { name: '6. Crush Injuries', path: 'protocols/trauma', icon: null },
          { name: '7. Head Injury(Traumatic Brain Injury)', path: '/protocols/trauma', icon: null },
          { name: '8. Hemorrhage Control and Soft Tissue Injuries', path: '/protocols/trauma', icon: null },
          { name: '9. Non-Accidental Trauma/Abuse', path: '/protocols/trauma', icon: null },
          { name: '10. Skeletal Injuries', path: '/protocols/trauma', icon: null },
          { name: '11. Snake Bites', path: '/protocols/trauma', icon: null}
      ];

      const displayButtons = ButtonInfo.map((ButtonInfo, index) => {
         return <Button
          key={buttonInfo + index}
          text={buttonInfo.name}
          path={buttonInfo.path} />
      });

      return (
          <TraumaWrapper>
              <SearchBarTrauma />
              <ButtonsContainer>{displayButtons}</ButtonsContainer>
          </TraumaWrapper>
      );
  }

  export default Trauma;