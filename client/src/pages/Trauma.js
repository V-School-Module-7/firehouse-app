import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import ButtonTrauma from '../components/ButtonTrauma';

const TraumaWrapper = styled.div ``;
const SearchBarTrauma = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 135px 135px;
  grid-auto-rows: auto;
  grid-gap: 130px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

  function Trauma(props) {
      const ButtonInfo = [
          { name: 'Trauma Patient Care Guidelines', path: '/protocols/trauma', icon: null },
          { name: 'Utah Trauma Field Triage Guidelines', path: '/protocols/trauma', icon: null },
          { name: 'Amputations', path: '/protocols/trauma', icon: null },
          { name: 'Burns - Electrical/Thermal', path: '/protocols/trauma', icon: null },
          { name: 'Chest Trauma', path: '/protocols/trauma', icon: null },
          { name: 'Crush Injuries', path: 'protocols/trauma', icon: null },
          { name: 'Head Injury(Traumatic Brain Injury)', path: '/protocols/trauma', icon: null },
          { name: 'Hemorrhage Control and Soft Tissue Injuries', path: '/protocols/trauma', icon: null },
          { name: 'Non-Accidental Trauma/Abuse', path: '/protocols/trauma', icon: null },
          { name: 'Skeletal Injuries', path: '/protocols/trauma', icon: null },
          { name: 'Snake Bites', path: '/protocols/trauma', icon: null}
      ];

      const displayButtons = ButtonInfo.map((buttonInfo, index) => {
         return <Button
          key={buttonInfo + index}
          text={buttonInfo.name}
          path={buttonInfo.path} />,

          <ButtonTrauma
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