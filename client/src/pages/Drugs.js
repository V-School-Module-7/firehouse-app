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


function Drugs(props) {
    const amiodaroneInfo = [
        { name: "Cardiac Arrest", path: "/", icon: null},
        { name: "Post Cardiac Arrest/Return of Spontaneous Circulation ROSC", path: "/", icon: null},
        { name: "Tachycardia", path: "/", icon: null}
    ];
    const amiodaroneButtons = amiodaroneInfo.map((amiodaroneInfo, index) => (
        <Button 
            key={amiodaroneInfo + index}
            text={amiodaronInfo.name}
            path={amiodaroneInfo.path}
        />
    ));
    const atropineInfo = [
        { name: "Beta Blocker Toxicity", path: "/", icon: null},
        { name: "Bradycardia", path: "/", icon: null}
    ];
    const atropineButtons = atropineInfo.map((atropineInfo, index) => (
        <Button 
            key={atropineInfo + index}
            text={atropineInfo.name}
            path={atropineInfo.path}
        />
    ));
    const bipapInfo = [
        { name: "Congestive Heart Failure/Pulmonary Edema", path: "/", icon: null},
        { name: "Respiratory Distress/Airway & Tracheostomy Management", path: "/", icon: null}
    ];
    const bipapButtons = bipapInfo.map((bipapInfo, index) => (
        <Button 
            key={bipapInfo + index}
            text={bipapInfo.name}
            path={bipapInfo.path}
        />
    ));
    const dextroseInfo = [
        { name: "Hypoglycemia/Altered Mental Status/Violent Patient", path: "/", icon: null},
        { name: "Newborn Resuscitation", path: "/", icon: null}
    ];
    const dextroseButtons = dextroseInfo.map((dextroseInfo, index) => (
        <Button 
            key={dextrose + index}
            text={dextroseInfo.name}
            path={dextrose.path}
        />
    ));
    

    return(
        <DrugsWapper>
            <SearchBarDrugs />
            <ButtonsContainer>

            </ButtonsContainer>
        </DrugsWapper>
    )
}

export default Drugs
