import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MedCard from "../components/MedCard";
import { MedicalContext } from "../context/MedicalProvider";


const MedListWrapper = styled.div``;

export default function MedList(props) {
    const { medicalDataToDisplay, getAllMedicalData, } = useContext(MedicalContext);

    console.log(medicalDataToDisplay)

    useEffect(() => getAllMedicalData(), []);
    const displayMedicalData = medicalDataToDisplay.map((medications, index) => (

        <MedCard key={index} medicalInfo={medications} conditions={medications.conditions} />
    ));

    return <MedListWrapper> {displayMedicalData}</MedListWrapper>;

}