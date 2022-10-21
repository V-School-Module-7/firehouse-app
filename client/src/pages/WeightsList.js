import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'



const WeightWrapper = styled.div``;
const SearchBarWeights = styled(SearchBar);

// opacity: ${props => (props.open ? "1" : "0")}
// max-height: ${props => (props.open ? "100%" : "0")};
// padding: ${props => (props.open ? "15px" : "0 15px")};
export const Details = styled.div`
  border: 1px solid gray;
  border-top: none;
  transition: all 0.3s ease-out;
  overflow: hidden;

  p {
    margin: 0;
  }
`;

function WeightsList(props){
  
  // const weightInfo = [
  //   {name: "Weights", path: "/medical", icon: null}
  // ]
  // console.log(props)

  //header of page
  // const condition = props.location.state

  //   const displayWeights = condition.weights.map((weightInfo, index) => (
  //       <Details //need actual component to pass info into
  //         key={weightInfo.amount + index}
  //         text={weightInfo.amount}
  //         path={weightInfo.path}
  //       />
  //     ));

    return(<div></div>
        // <WeightWrapper>
        //     <SearchBarWeights />
        //     <Details>
        //       {displayWeights}
        //     </Details>
        // </WeightWrapper>
    )
}

export default WeightsList