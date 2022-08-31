import React, { useContext, useState } from "react"
// import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
// import { FireContext } from "../context/FireProvider";
import CheckBox from "../components/Checkbox";

// const SearchBarSizeUp = styled(SearchBar);
const BenchmarkWrapper = styled.div``;

export default function Benchmarks() {
  // const {fireData, sanitizeData} = useContext(FireContext)
// fix dates, getting incorrect time
//shows 10:2 instead of 10:20

    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const date = time.getDate()
    const hours = time.getHours()
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    let minutes = time.getMinutes()
    minutes = minutes <= 9 ? '0' + minutes : minutes

    const items = [
        {
            id: 1,
            title: "Primary All Clear",
            isClicked: false
        },
        {
            id: 2,
            title: "Secondary All Clear",
            isClicked: false
        },
        {
            id: 3,
            title: "Under Control",
            isClicked: false
        },
        {
            id: 4,
            title: "Loss Stop",
            isClicked: false
        },
        
    ]

    const [benchmarkMakeUp, setBenchmarkMakeUp] = useState(items)

    function updateCheckStatus(index) {
      setBenchmarkMakeUp(prev => 
        prev.map((item, currentIndex) => currentIndex === index ? {...item, isClicked: !item.isClicked} : item)
      )
    }

    // console.log(benchmarkMakeUp, "bench")
    
    // const mappedArr = arr.map(info => info.charAt(0).bold() + info.slice(1))

// if checkbox is clicked, get timeStamp

return(
  <BenchmarkWrapper>
    {benchmarkMakeUp.map((item, index) => (
      <>
        {/* {console.log(item.title.charAt(0) + item.title.slice(1))} */}
        {/* <p><b>{`${item.title.charAt(0)}`}</b>{`${item.title.slice(1)}`}</p> */}
        <h3>{item.title}</h3>
        <CheckBox
          key={item.id}
            isClicked={item.isClicked}
            checkHandler={() => updateCheckStatus(index)}
            label={'Yes'}
            index={index}
        />
        {item.isClicked === true ? <div>Time: {`${year}/${month}/${date} ${hours % 12}:${minutes} ${amOrPm}`}</div> : null }
      </>
    ))}
  </BenchmarkWrapper>
  )
}