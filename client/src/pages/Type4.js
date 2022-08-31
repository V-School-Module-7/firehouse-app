import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import Type4Pic from '../assets/buildingTypes/Type-4.jpg'

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
    
    const type4 = fireData.buildingData.info[3].data[0]
    
    return (
        <Type1Wrapper>
            {console.log(fireData,'data')}
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    Type IV Heavy Timber
                </TitleWrapper>
            </SectionWrapper>  
            <ImageWrapper1>
                <img src={Type4Pic} alt='' />
            </ImageWrapper1>
            <SectionWrapper>
                {type4.characteristics.map(characteristic => 
                    <div dangerouslySetInnerHTML={sanitizeData(characteristic)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type4.materials.map(material => 
                    <div dangerouslySetInnerHTML={sanitizeData(material)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type4.hazards.map(hazard => 
                    <div dangerouslySetInnerHTML={sanitizeData(hazard)}></div> 
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type4.slowBurn.map(slow =>
                    <div dangerouslySetInnerHTML={sanitizeData(slow)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type4.burnTime.map(time =>
                    <div dangerouslySetInnerHTML={sanitizeData(time)}></div>
                )}
            </SectionWrapper>
            <SectionWrapper>
                {type4.sizeUp.map(size =>
                    <div dangerouslySetInnerHTML={sanitizeData(size)}></div>
                )}
            </SectionWrapper>
        </Type1Wrapper>
    )
}