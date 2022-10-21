import React, { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
// import MedCard from "../components/MedCard";
// import PediatricCard from '../components/PediatricCard'
// import { MedicalContext } from "../context/MedicalProvider";
// import  {PediatricContext} from '../context/PediatricProvider';
import Button2 from "../components/Button2"

const ProtocolsWrapper = styled.div``;
const SearchBarProtocols = styled(SearchBar)``;

// const MedListWrapper = styled.div`
// padding: 16px;
// padding-left: 12px;
// margin: 20px;
// border-radius: 6px;
// border: 2px solid #979797;`;

const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-gap: 20px;
width: 100vw;
margin: 16px auto 0px auto;
justify-content: center;
`;

export default function MedList(props) {

    const buttonInfo = [
        {name: "Pediatric Emergency Guide", path: "/medical/pediatric", icon: null},
        {name: "AHA Algorithms", path: "/medical/alogrithms", icon: null},
        {name: "Lab Values", path: "/medical/lab", icon: null},
        {name: "Infusion Pump", path: "/medical/infusion", icon: null}
    ]

    const displayButtons = buttonInfo.map((buttonInfo, index) => (
        <Button2
          key={buttonInfo + index}
          text={buttonInfo.name }
          path={buttonInfo.path}
        />
      ));



    // const { medicalDataToDisplay, getAllMedicalData, } = useContext(MedicalContext);

    // const { pediatricDataToDisplay, getAllPediatricData } = useContext(PediatricContext)


    // console.log('pediatric data:', pediatricDataToDisplay)

    // useEffect(() => getAllPediatricData(),[]);

    // const displayPediatricData = pediatricDataToDisplay.map((data, index) => (
    //         <PediatricCard {...data} key={index} />
    // ))

    // useEffect(() => getAllMedicalData(), []);
    // const displayMedicalData = medicalDataToDisplay.map((medications, index) => (

    //     <MedCard key={index} medicalInfo={medications} conditions={medications.conditions} />
    // ));

    return( 
    <>
      <ProtocolsWrapper>
        <SearchBarProtocols />
        <ButtonsContainer>{displayButtons}</ButtonsContainer>
        </ProtocolsWrapper>
     </>
    );

}