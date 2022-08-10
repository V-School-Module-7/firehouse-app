import React, {useContext} from "react"
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from "../context/FireProvider";


export default function Type1() {
    const Type1Wrapper = styled.div``
    const SectionWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 2px 4px 4px #BEC8D5;
    border-radius: 10px;
    margin: 0px 30px 20px;
    display: flex;
    flex-direction: column;
    padding: 8px;

    `;

    const TitleWrapper = styled.div`
    font-family: 'Roboto';
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #131415;

    `;


    const {fireData} = useContext(FireContext)

    return (
        <Type1Wrapper>
            {console.log(fireData)}
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    Type I Fire Resistive Construction
                </TitleWrapper>
            </SectionWrapper>  
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].characteristics.map(characteristic => 
                    <div dangerouslySetInnerHTML={characteristic}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].materials.map(material => 
                    <div dangerouslySetInnerHTML={material}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].hazards.map(hazard => 
                    <div dangerouslySetInnerHTML={hazard}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].stackEffect.map(stack =>
                    <div dangerouslySetInnerHTML={stack}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].ventilation.map(vent =>
                    <div dangerouslySetInnerHTML={vent}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {fireData.buildingData.info[0].data[0].burnTime.map(time =>
                    <div dangerouslySetInnerHTML={time}></div>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}