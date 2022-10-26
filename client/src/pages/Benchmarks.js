// import React, { useContext, useState } from "react"
// import firebase from 'firebase';
// // import SearchBar from '../components/SearchBar';
// import styled from 'styled-components';
// import CheckBox from "../components/Checkbox";
// import { UserContext } from "../context/UserProvider";

// // const SearchBarSizeUp = styled(SearchBar);
// const BenchmarkWrapper = styled.div``;

// export default function Benchmarks() {
//   const {db} = useContext(UserContext)

//   const time = new Date()
//   const year = time.getFullYear()
//   const month = time.getMonth() + 1
//   const date = time.getDate()
//   let hours = time.getHours()
//   hours = hours % 12 || 12
//   const amOrPm = hours >= 12 ? 'AM' : 'PM';
//   let minutes = time.getMinutes()
//   minutes = minutes <= 9 ? '0' + minutes : minutes

//   const timestamp = `${year}/${month}/${date} ${hours}:${minutes} ${amOrPm}`

//   const items = [
//       {
//           id: 1,
//           title: "Primary All Clear",
//           isChecked: false
//       },
//       {
//           id: 2,
//           title: "Secondary All Clear",
//           isChecked: false
//       },
//       {
//           id: 3,
//           title: "Under Control",
//           isChecked: false
//       },
//       {
//           id: 4,
//           title: "Loss Stop",
//           isChecked: false
//         },
        
//       ]
      
//   const [displayMsg, setDisplayMsg]= useState("")
//   const [benchmarkMakeUp, setBenchmarkMakeUp] = useState(items)

//   function updateCheckStatus(index) {
//     setBenchmarkMakeUp(prev => 
//       prev.map((item, currentIndex) => currentIndex === index ? {
//         ...item, 
//         isChecked: !item.isChecked, 
//         timestamp: !item.isChecked ? timestamp : "Checkbox is unchecked. No timestamp."
//       } 
//         : item
//       )
//     )
    
//   }

//   // console.log(benchmarkMakeUp, "bm")

// function submitBenchmarkData() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User logged in already or has just logged in.
//         //reference document
//         //adding benchmark data inside of the benchmarks sub collection
//           db.collection("users").doc(user.uid).collection("benchmarks").add({
//             benchmarks: benchmarkMakeUp
//           })
//           //message that will display when data is submitted
//           setDisplayMsg("Benchmark data is submitted")
          
//         } else {
//           // User not logged in or has just logged out.
//           if(!user) return;
//         }
//     });

// }

// return(
//   <BenchmarkWrapper>
//     {benchmarkMakeUp.map((item, index) => (
//       <>
//         {/* {console.log(item.title.charAt(0) + item.title.slice(1))} */}
//         {/* <p><b>{`${item.title.charAt(0)}`}</b>{`${item.title.slice(1)}`}</p> */}
//         <h3>{item.title}</h3>
//         <CheckBox
//           key={item.id}
//             isChecked={item.isChecked}
//             checkHandler={() => updateCheckStatus(index)}
//             label={'Yes'}
//             index={index}
//         />
//         {item.isChecked === true ? <div>Time: {item.timestamp}</div> : null }
//       </>
//     ))}
//     <button onClick={submitBenchmarkData}>Submit</button>
//     <p>{displayMsg}</p>
//   </BenchmarkWrapper>
//   )
// }