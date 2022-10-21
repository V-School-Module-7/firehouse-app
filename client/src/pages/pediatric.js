import React, {useEffect, useContext} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom'
import MedCard from "../components/MedCard";
import PediatricList from '../components/PediatricList'

import  {PediatricContext} from '../context/PediatricProvider';
import Button2 from "../components/Button2"
import SearchBar from "../components/SearchBar";
import styled from "styled-components";


// this page I need display a list of 26 buttons that will direct to a specfic set of data
// from firebase. need to figure out if I should map data onto a button, or render the buttons, then render
// render data seperately

const ProtocolsWrapper = styled.div``;
const SearchBarProtocols = styled(SearchBar)``;

const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-gap: 20px;
width: 100vw;
margin: 16px auto 0px auto;
justify-content: center;
`;

export default function Pediatric() {


    const { pediatricDataToDisplay, getAllPediatricData } = useContext(PediatricContext)

    useEffect(() => getAllPediatricData(),[]);

  return (
<>
{pediatricDataToDisplay.map((data, index) => (
            <PediatricList {...data} key={index} />
    ))}
</>
  )
}
