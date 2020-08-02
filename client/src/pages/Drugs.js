import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';


const DrugsWapper = styled.div``;
const SearchBarDrugs = styled(SearchBar);
const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 154px 154px;
    grid-auto-rows: auto;
    grid-gap: 20px;
    width: 100vw;
    margin: 16px auto 0px auto;
    justify-content: center;
`;

const DrugButtonsContainer = styled.div`
    display: grid;
    grid template-columns: 154px 154px;
    grid-auto rows: auto;
    grid-gap: 20px;
    width: 100vw;
    margin: 16px auto 0px auto;
    justify-content: center;
    background-color:  #D8D8D8;
`;

