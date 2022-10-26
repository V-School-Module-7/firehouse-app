import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import firebase from "firebase";
import CreateTasks from "../components/CreateTasks";

//relate user to drag and drops
//if a task is created, push the task inside of the button List array

const buttonList = [
  { id: 1, name: "BC2", category: "alarm2" },
  { id: 2, name: "E7", category: "alarm2" },
  { id: 3, name: "T1", category: "userAdded" },
  { id: 4, name: "T2", category: "userAdded" },
  { id: 5, name: "M5", category: "userAdded" },
  { id: 6, name: "BC1", category: "IC" },
  { id: 7, name: "E1", category: "FA" },
  { id: 8, name: "E2", category: "FA" },
  { id: 9, name: "E10", category: "FA" },
  { id: 10, name: "E3", category: "search" },
  { id: 11, name: "E6", category: "search" },
  { id: 12, name: "E4", category: "vent" },
  { id: 13, name: "T10", category: "vent" },
  { id: 14, name: "R1", category: "RIC" },
  { id: 15, name: "M1", category: "MED" }
];

export default function TestBenchmarks() {
  //state
  const [tasks, setTasks] = useState(buttonList);
  const {db} = useContext(UserContext)

const time = new Date()
const year = time.getFullYear()
const month = time.getMonth() + 1
const date = time.getDate()
let hours = time.getHours()
hours = hours % 12 || 12
const amOrPm = hours >= 12 ? 'AM' : 'PM';
let minutes = time.getMinutes()
minutes = minutes <= 9 ? '0' + minutes : minutes

const timestamp = `${year}/${month}/${date} ${hours}:${minutes} ${amOrPm}`

function dropBenchmarkData(droppedData) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //User logged in already or has just logged in.
      //reference document
      //adding benchmark data inside of the benchmarks sub collection
        db.collection("users").doc(user.uid).collection("benchmarks").add({
          // benchmarks: benchmarkMakeUp
          task: droppedData.name,
          category: droppedData.category,
          timestamp: timestamp
        })
        
      } else {
        // User not logged in or has just logged out.
        if(!user) return;
      }
  })
}

  //***functions***
  //drag starting
  function onDragStart(e, name) {
    console.log("dragstart:", name);
    e.dataTransfer.setData("name", name);
  }

  //drag over
  function onDragOver(e) {
    e.preventDefault();
  }

  //dropped what is dragged
  function onDrop(e, cat) {
    let name = e.dataTransfer.getData("name");
    console.log(cat, "the category it's dropping to");
    console.log(name, "is name");
    tasks.filter((task) => {
      console.log(task.name, "tName");
      if (task.name === name) {
        task.category = cat
        dropBenchmarkData(task)
      }
      return task;
    });
    setTasks((prev) => [...prev, tasks]);
    console.log(tasks, "tasks state");
  }

  var sections = {
    alarm1: [],
    alarm2: [],
    userAdded: [],
    IC: [],
    FA: [],
    search: [],
    vent: [],
    RIC: [],
    MED: [],
    addColumn: []
  };

  tasks.map((task) => {
    console.log(Array.isArray(sections[task.category]), "test sect");
    return sections[task.category]?.push(
      <div
        key={task.name}
        onDragStart={(e) => onDragStart(e, task.name)}
        draggable
        className="draggable"
      >
        {task.name}
      </div>
    )
  })

  console.log(sections, "sections")

  return (
    <div className="container">
      <div className="alarm1">1st Alarm - 7 Units</div>
      <div
        className="alarmBtns1"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "alarm1");
        }}
      >
        <p className="name">{sections.alarm1}</p>
      </div>
      <div className="IC">IC</div>
      <div className="FA">FA</div>
      <div className="SEARCH">SEARCH</div>
      <div className="VENT">VENT</div>
      <div className="RIC">RIC</div>
      <div className="MED">MED</div>
      <div className="alarm2">2nd Alarm - 5 Units</div>
      <div
        className="alarmBtns2"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "alarm2");
        }}
      >
        <p className="name">{sections.alarm2}</p>
      </div>
      <div className="user-added">User Added</div>
      <div
        className="userAddedBtns"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "userAdded");
        }}
      >
        <p className="name">{sections.userAdded}</p>
      </div>
      <div className="add-note"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "IC");
        }}
      >
        Add Note
       
          <p className="name">{sections.IC}</p>
        </div>
      <div className="add-note2"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "FA");
        }}
      >
        Add Note
    
          <p className="name">{sections.FA}</p>
       
      </div>
      <div className="add-note3"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "search");
        }}
      >
        Add Note
    
          <p className="name">{sections.search}</p>
        
      </div>
      <div className="add-note4"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "vent");
        }}
      >
        Add Note
          <p className="name">{sections.vent}</p>
      </div>
      <div className="add-note5"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "RIC");
        }}
      >
        Add Note
      
          <p className="name">{sections.RIC}</p>
      </div>
      <div 
        className="add-note6"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "MED");
        }}
      >
        Add Note
       
          <p className="name">{sections.MED}</p>
        

      </div>
      <div className="assignments">Assignments</div>
      <div className="units">Units</div>

      <div className="add-column">Add Column</div>
      <div
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "addColumn");
        }}
      >
        <p className="name">{sections.addColumn}</p>
      </div>
<CreateTasks />
    </div>
  );
}