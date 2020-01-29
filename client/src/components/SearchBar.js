import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
const SearchInput = styled.input`
  max-width: 95vw;
  width: 100%;
  margin: auto;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rbg(176, 176, 176);
  font-size: 16pt;
  padding: 8px;
`;

export default function SearchBar(props) {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search" type="text" name="search" />
    </SearchBarContainer>
  );
}
