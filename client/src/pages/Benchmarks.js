import { UserContext } from "../context/UserProvider"
import firebase from "firebase"
import React, { useState, useContext, useEffect } from "react"
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

const buttonList = [
  { id: 1, name: "BC2", category: "taskBox" },
  { id: 2, name: "E7", category: "taskBox" },
  { id: 3, name: "T1", category: "taskBox" },
  { id: 4, name: "T2", category: "taskBox" },
  { id: 5, name: "M5", category: "taskBox" },
  { id: 6, name: "BC1", category: "taskBox" },
  { id: 7, name: "E1", category: "taskBox" },
  { id: 8, name: "E2", category: "taskBox" },
  { id: 9, name: "E10", category: "taskBox" },
  { id: 10, name: "E3", category: "taskBox" },
  { id: 11, name: "E6", category: "taskBox" },
  { id: 12, name: "E4", category: "taskBox" },
  { id: 13, name: "T10", category: "taskBox" },
  { id: 14, name: "R1", category: "taskBox" },
  { id: 15, name: "M1", category: "taskBox" }
]

export default function Benchmarks() {
  const initInput = {
    task: ""
  }
  //state and context
  const [tasks, setTasks] = useState(buttonList)
  const [createdTask, setCreatedTask] = useState([])
  const [taskInput, setTaskInput] = useState(initInput)
  const [open, setOpen] = useState(false)  
  const [isToggled, setIsToggled] = useState(false) 
  const {db} = useContext(UserContext)

  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  let hours = time.getHours()
  hours = hours % 12 || 12
  const amOrPm = hours >= 12 ? 'AM' : 'PM'
  let minutes = time.getMinutes()
  minutes = minutes <= 9 ? '0' + minutes : minutes
  let seconds = time.getSeconds()
  seconds = seconds <= 9 ? '0' + seconds : seconds

  const timestamp = `${year}/${month}/${date} ${hours}:${minutes}:${seconds} ${amOrPm}`


  function toggle() {
    setIsToggled(prev => !prev)
  }

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
          if(!user) return
        }
    })
  }

  //***functions***
  //drag starting
  function onDragStart(e, name) {
    console.log("dragstart:", name)
    e.dataTransfer.setData("name", name)
  }

  //drag over
  function onDragOver(e) {
    e.preventDefault()
  }

  //dropped what is dragged
  function onDrop(e, cat) {
    let name = e.dataTransfer.getData("name")
    console.log(cat, "the category it's dropping to")
    console.log(name, "is name")
    newTasksArr.filter((task) => {
      console.log(task.name, "tName")
      if (task.name === name) {
        task.category = cat
        dropBenchmarkData(task)
      }
      return task
    })
    setTasks((prev) => [...prev, tasks])
    console.log(tasks, "tasks state")
  }

  var sections = {
    taskBox: [],
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
  }

  const newTasksArr = tasks.concat(createdTask)

  newTasksArr.map((task) => {
    return sections[task.category]?.push(
      <div
        key={task.name}
        onDragStart={(e) => onDragStart(e, task.name)}
        draggable
        className="draggable"
      >
        <p style={{border: "solid, gray", borderRadius: "5px", margin: "5px 8px", cursor: "pointer", backgroundColor: "gray"}}>{task.name}</p>
        {/* show delete button */}
        {
          isToggled && typeof task.id === "string" ?
            <button className="deleteBtn" onClick={() => deleteTasks(task.id)}><i class="fa-solid fa-xmark"></i></button>
          :
            null
        }
      </div>
    )
  })

  function handleChange(e) {
      const {name, value} = e.target
      setTaskInput(prev => ({
          ...prev,
          [name]:value
      }))
  }
    
  //get benchmark tasks from firebase
  function getTasks() {
    db.collection("createdBenchmarkTasks").get().then(querySnapshot => {
      const taskArr = []
      querySnapshot.forEach(doc => {
        taskArr.push({id: doc.id, ...doc.data()})
        console.log(doc.id, ":", doc.data())
        
      })
      setCreatedTask(taskArr)
      
    })
  }
  
  useEffect(() => {
      getTasks()
  }, [])

  function deleteTasks(id) {
    db.collection("createdBenchmarkTasks").doc(id).delete().then(() => {
        console.log("Document successfully deleted!")
    })
    .then(getTasks())
    .catch((error) => {
        console.error("Error removing document: ", error)
    })
  }

  function submitTasks() {
    console.log("Task submitted!")
    db.collection("createdBenchmarkTasks").add({
      // task: taskInput.task
      name: taskInput.task,
      category: "taskBox"
    })
    .then(getTasks())
    setTaskInput(initInput)
  }

  function onOpenModal() {
    setOpen(true)
  }

  function onCloseModal() {
    setOpen(false)
  }

  return (
    <div>
      <button style={{marginBottom: "3vh", marginLeft: "1vh"}} onClick={onOpenModal}>Create Task</button>
      <button style={{marginBottom: "3vh", marginLeft: "1vh"}} onClick={toggle}>Delete Created Task</button>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Create a New Task</h2>
        <input name="task" value={taskInput.task} onChange={handleChange} />
        <button onClick={submitTasks}>Submit</button>
      </Modal>

      <div className="container">
        <div className="alarm1">1st Alarm - 7 Units</div>
        <div
          className="alarmBtns1"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "alarm1")
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
            onDrop(e, "alarm2")
          }}
        >
          <p className="name">{sections.alarm2}</p>
        </div>
        <div className="user-added">User Added</div>
        <div
          className="userAddedBtns"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "userAdded")
          }}
        >
          <p className="name">{sections.userAdded}</p>
        </div>
        <div className="add-note"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "IC")
          }}
        >
          Add Note
          <p className="name">{sections.IC}</p>
        </div>
        <div className="add-note2"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "FA")
          }}
        >
          Add Note
          <p className="name">{sections.FA}</p>
        </div>
        <div className="add-note3"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "search")
          }}
        >
          Add Note
          <p className="name">{sections.search}</p>
        </div>
        <div className="add-note4"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "vent")
          }}
        >
          Add Note
          <p className="name">{sections.vent}</p>
        </div>
        <div className="add-note5"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "RIC")
          }}
        >
          Add Note
          <p className="name">{sections.RIC}</p>
        </div>
        <div 
          className="add-note6"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "MED")
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
            onDrop(e, "addColumn")
          }}
        >
          <p className="name">{sections.addColumn}</p>
        </div>
      </div>
      <div className="taskBox"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "taskBox")
        }}
      >
        Task Box
        <p className="name formatName">
          {sections.taskBox}
        </p>
      </div>
    </div>
  )
}