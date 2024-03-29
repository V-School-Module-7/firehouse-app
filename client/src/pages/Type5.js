import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import Type5Pic from '../assets/buildingTypes/Type-5.jpg'

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
export default function Type4() {

    const {fireData, sanitizeData} = useContext(FireContext)
    
    const type5 = fireData.buildingData.info[4].data[0]
    
    return (
        <Type1Wrapper>
            {console.log(fireData,'data')}
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    Type V Wood Frame Construction
                </TitleWrapper>
            </SectionWrapper>
            <ImageWrapper1>
                <img src={Type5Pic} alt='' />
            </ImageWrapper1>
            <SectionWrapper>
                {type5.characteristics.map(characteristic => 
                    <div dangerouslySetInnerHTML={sanitizeData(characteristic)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type5.materials.map(material => 
                    <div dangerouslySetInnerHTML={sanitizeData(material)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type5.hazards.map(hazard => 
                    <div dangerouslySetInnerHTML={sanitizeData(hazard)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type5.trusses.map(truss =>
                    <div dangerouslySetInnerHTML={sanitizeData(truss)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type5.burnTime.map(time =>
                    <div dangerouslySetInnerHTML={sanitizeData(time)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type5.sizeUp.map(size =>
                    <div dangerouslySetInnerHTML={sanitizeData(size)}></div>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}