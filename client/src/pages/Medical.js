import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import {medications} from '../medical-data/index'

const MedWrapper = styled.div``;
const SearchBarMedical = styled(SearchBar);
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
`;

function Medical(props){


    const displayButtons = {medications}.map((buttonInfo, index) => (
        <Button
          key={buttonInfo + index}
          text={buttonInfo.data}
          path={buttonInfo.data}
        />
      ));

    return(
        <MedWrapper>
            <SearchBarMedical />
            <ButtonsContainer>{displayButtons}</ButtonsContainer>
        </MedWrapper>
    )  
}

export default Medical