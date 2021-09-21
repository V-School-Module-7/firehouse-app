import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/search.svg";

const SearchBarContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
const SearchInput = styled.input`
  padding: 5px;
  padding-left: 45px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: auto 25px;
  background-position: 11px 11px;
  background-color: #ffffff;
  max-width: 95vw;
  width: 100%;
  margin: auto;
  height: 50px;
  border-radius: 6px;
  border: 2px solid #979797;
  font-size: 16pt;
`;

export default function SearchBar(props) {
  return (
    <SearchBarContainer>
      <SearchInput type="search" placeholder="Search" name="search" onChange={props.handleChange} />
    </SearchBarContainer>
  );
}
