import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import Type2Pic from '../assets/buildingTypes/Type 2.jpg'
import Type2Pic2 from '../assets/buildingTypes/Type 2 pic 2.jpg'

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
export default function Type2() {

    const {fireData, sanitizeData} = useContext(FireContext)
    
    const type2 = fireData.buildingData.info[1].data[0]

    return (
        <Type1Wrapper>
            {console.log(fireData,'data')}
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    Type II Noncombustible or Limited Combustible
                </TitleWrapper>
            </SectionWrapper>  
            <ImageWrapper1>
                <img src={Type2Pic} alt='' />
            </ImageWrapper1>
            <SectionWrapper>
                {type2.characteristics.map(characteristic => 
                    <div dangerouslySetInnerHTML={sanitizeData(characteristic)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type2.materials.map(material => 
                    <div dangerouslySetInnerHTML={sanitizeData(material)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type2.hazards.map(hazard => 
                    <div dangerouslySetInnerHTML={sanitizeData(hazard)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type2.collapse.map(col =>
                    <div dangerouslySetInnerHTML={sanitizeData(col)}></div>
                )}
            <ImageWrapper2>
                <img src={Type2Pic2} alt='' />
            </ImageWrapper2>
            </SectionWrapper>
            <SectionWrapper>
                {type2.burnTime.map(time =>
                    <div dangerouslySetInnerHTML={sanitizeData(time)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type2.sizeUp.map(size =>
                    <div dangerouslySetInnerHTML={sanitizeData(size)}></div>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}