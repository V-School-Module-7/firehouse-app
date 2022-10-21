import React, {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom'
import MedCard from "./MedCard";

import  {PediatricContext} from '../context/PediatricProvider';
import Button2 from "./Button2"
import SearchBar from "./SearchBar";
import styled from "styled-components";


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


export default function PediatricList(props){


const {data, Anaphylaxis, airwayEquipment, cardioversion, defibrillation, hypoglycemia, vitalSigns, _id} = props


const buttonInfo = [
    {weight: "2-3 Kg (4.5-6.7lbs)", age: " NewBorn", length: "46-52 cm (18-20 in)", path: `/medical/pediatric/:${_id}`, icon: null},
    {weight: "4 Kg (4.5-6.7lbs)", age: "1 month", length: "52-58 cm (20-22 in", path: `/medical/pediatric/:${_id}`, icon: null},

]

console.log("id:", _id)
console.log("data", data) 


const displayButtons = buttonInfo.map((buttonInfo, index) => (
  // wrap this button in a link tag (from react router dom library)
<Link to={`/medical/pediatric/:${_id}`}>
  <Button2
      key={buttonInfo + index}
      text={buttonInfo.weight + buttonInfo.age + buttonInfo.length}
      path={buttonInfo.path}
  />
</Link>
))

// take the id from useParams
// make a getOne request using the id, to grab data for that entry 
    return(
        <div>
      <ProtocolsWrapper>
        <SearchBarProtocols />
        <ButtonsContainer>
          {displayButtons}
        </ButtonsContainer>
        </ProtocolsWrapper>
        </div>
    )
}