import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import Type1Pic1 from '../assets/buildingTypes/Type-1-pic-1.jpg'
import Type1Pic2 from '../assets/buildingTypes/Type-1-pic-2.jpg'

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

const ImageWrapper1 = styled.div`
margin: 0px 30px 20px;
display: flex;
flex-direction: column;
padding: 8px;
`
const ImageWrapper2 = styled.div`
margin: 200px 30px 20px;
display: flex;
flex-direction: column;
padding: 8px;
`
export default function Type1() {

    const {fireData, sanitizeData} = useContext(FireContext)

    const type1 = fireData.buildingData.info[0].data[0]

    return (
        <Type1Wrapper>
            {console.log(fireData)}
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    Type I Fire Resistive Construction
                </TitleWrapper>
            </SectionWrapper>
            <ImageWrapper1>
                <img src={Type1Pic1} alt='' />
            </ImageWrapper1>  
            <SectionWrapper>
                {type1.characteristics.map(characteristic => 
                    <div dangerouslySetInnerHTML={sanitizeData(characteristic)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type1.materials.map(material => 
                    <div dangerouslySetInnerHTML={sanitizeData(material)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type1.hazards.map(hazard => 
                    <div dangerouslySetInnerHTML={sanitizeData(hazard)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type1.stackEffect.map(stack =>
                    <div dangerouslySetInnerHTML={sanitizeData(stack)}></div>
                )}
                <ImageWrapper2>
                    <img src={Type1Pic2} alt='' />
                </ImageWrapper2>
            </SectionWrapper>
            <SectionWrapper>
                {type1.ventilation.map(vent =>
                    <div dangerouslySetInnerHTML={sanitizeData(vent)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type1.burnTime.map(time =>
                    <div dangerouslySetInnerHTML={sanitizeData(time)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type1.sizeUp.map(size =>
                    <div dangerouslySetInnerHTML={sanitizeData(size)}></div>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}