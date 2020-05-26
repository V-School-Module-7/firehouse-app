import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'


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
  const buttonInfo = [
    {name: "Medication", path: "/medical", icon: null}
  ]

    const displayButtons = buttonInfo.map((buttonInfo, index) => (
        <Button
          key={buttonInfo.name + index}
          text={buttonInfo.name}
          path={buttonInfo.path}
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