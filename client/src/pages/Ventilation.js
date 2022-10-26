import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';

import NaturalVentilation from "../assets/ventilation/Natural-Ventilation-pic.jpg"
import PositivePressure from "../assets/ventilation/Positive-Pressure-Ventilation-pic.jpg"
import NegativePressure from "../assets/ventilation/Negative-Pressure-Ventilation-pic.jpg"
import CombinationVentilation from "../assets/ventilation/Combination-Ventilation-pic.jpg"
import VerticalVentilation from "../assets/ventilation/Vertical-Ventilation-pic.jpg"
import HydraulicVentilation from "../assets/ventilation/Hydraulic-Ventilation-pic.jpg"
import HorizontalVentilation from "../assets/ventilation/Horizontal-Ventilation-pic.jpg"

const Type1Wrapper = styled.div``
const SectionWrapper = styled.div`
background: #FFFFFF;
box-shadow: 2px 4px 4px #BEC8D5;
border-radius: 10px;
margin: 0px 30px 20px;
display: flex;
flex-direction: column;
padding: 8px;
color: #474646;

`;

const TitleWrapper = styled.div`
font-family: 'Roboto';
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #131415;

`;

const DataWrapper = styled.div`
font-family: 'Roboto';
font-size: 18px;
text-align: center;
margin-bottom: 5px;

`

const ImageWrapper3 = styled.div`
margin: 100px 8px 8px;
display: flex;
flex-direction: column;
padding: 8px;
`
const ImageDataWrapper = styled.div`
font-family: 'Roboto';
font-size: 18px;
text-align: left;
margin-bottom: 5px;
padding: 5px;

`

export default function Ventilation() {

    const {fireData} = useContext(FireContext)

    const name = fireData.ventilationData.info[0].name
console.log(fireData.ventilationData, "vd")
    return (
        <Type1Wrapper>
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    {name}
                </TitleWrapper>
            </SectionWrapper>
            <SectionWrapper style={{paddingBottom: '85px'}}>
                    {fireData.ventilationData.info[0].summary.data.map(summaryData => 
                        <DataWrapper>{summaryData}</DataWrapper>
                    )}
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.ventilationData.info[0].naturalVentilation.title}
                </TitleWrapper>
                {fireData.ventilationData.info[0].naturalVentilation.data.map(ventData => 
                        <DataWrapper>{ventData}</DataWrapper>
                    )}
                     <ImageWrapper3>
                        <img src={NaturalVentilation} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.ventilationData.info[0].mechanicalVentilation.title}
                </TitleWrapper>
                {fireData.ventilationData.info[0].mechanicalVentilation.data.map(mechanicalData => 
                        <DataWrapper>{mechanicalData}</DataWrapper>
                    )}
                    <ImageWrapper3>
                        <img src={PositivePressure} alt='' />
                    </ImageWrapper3>
                    {fireData.ventilationData.info[0].mechanicalVentilation.imageData1.map(imageData => 
                        <ImageDataWrapper>{imageData}</ImageDataWrapper>
                    )}
                    <ImageWrapper3>
                        <img src={NegativePressure} alt='' />
                    </ImageWrapper3>
                    {fireData.ventilationData.info[0].mechanicalVentilation.imageData2.map(imageData => 
                        <ImageDataWrapper>{imageData}</ImageDataWrapper>
                    )}
                    <ImageWrapper3>
                        <img src={CombinationVentilation} alt='' />
                    </ImageWrapper3>
                    {fireData.ventilationData.info[0].mechanicalVentilation.imageData3.map(imageData => 
                        <ImageDataWrapper>{imageData}</ImageDataWrapper>
                    )}
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.ventilationData.info[0].verticalVentilation.title}
                </TitleWrapper>
                {fireData.ventilationData.info[0].verticalVentilation.data.map(verticalData => 
                        <DataWrapper>{verticalData}</DataWrapper>
                    )}
                     <ImageWrapper3>
                        <img src={VerticalVentilation} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.ventilationData.info[0].hydraulicVentilation.title}
                </TitleWrapper>
                {fireData.ventilationData.info[0].hydraulicVentilation.data.map(hydraulicData => 
                        <DataWrapper>{hydraulicData}</DataWrapper>
                    )}
                <ImageWrapper3>
                    <img src={HydraulicVentilation} alt='' />
                </ImageWrapper3>
                {fireData.ventilationData.info[0].hydraulicVentilation.imageData1.map(imageData => 
                    <ImageDataWrapper>{imageData}</ImageDataWrapper>
                )}
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.ventilationData.info[0].horizontalVentilation.title}
                </TitleWrapper>
                {fireData.ventilationData.info[0].horizontalVentilation.data.map(horizontalData => 
                        <DataWrapper>{horizontalData}</DataWrapper>
                    )}
                <ImageWrapper3>
                    <img src={HorizontalVentilation} alt='' />
                </ImageWrapper3>
                {fireData.ventilationData.info[0].horizontalVentilation.imageData1.map(imageData => 
                    <ImageDataWrapper>{imageData}</ImageDataWrapper>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}