// import React, { useState, useContext, useEffect } from "react"
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import { UserContext } from "../context/UserProvider"

export default function CreateTasks() {
    // const initInput = {
    //     task: ""
    // }

    //redo css grids for benchmarks X
    //create all tasks and have them placed an empty container
    //grab tasks from empty container and place theme in the columns/sections***
    //delete: click delete, then x's come up for each tasks for the user to delete whichever one

    //make taskName the other task state

    // const [taskName, setTaskName] = useState([])
    // const [taskInput, setTaskInput] = useState(initInput)
    // const [open, setOpen] = useState(false)   
    // const {db} = useContext(UserContext)

// console.log(taskName, "tname")
//     function handleChange(e) {
//         const {name, value} = e.target
//         setTaskInput(prev => ({
//             ...prev,
//             [name]:value
//         }))
//     }

//     //get benchmark tasks from firebase
//     function getTasks() {
//         db.collection("benchmarkTasks").get().then(querySnapshot => {
//             const taskArr = []
//             querySnapshot.forEach(doc => {
//                 taskArr.push({id: doc.id, ...doc.data()})
//                 console.log(doc.id, ":", doc.data())
                
//             })
//             setTaskName(taskArr)

//     })
// }

//     function deleteTasks(id) {
//         db.collection("benchmarkTasks").doc(id).delete().then(() => {
//             console.log("Document successfully deleted!");
//         })
//         .then(getTasks())
//         .catch((error) => {
//             console.error("Error removing document: ", error);
//         })
//     }

//     useEffect(() => {
//         getTasks()
//     }, [])
  
    
//     function submitTasks() {
//         console.log("Task submitted!")
//         db.collection("benchmarkTasks").add({
//           task: taskInput.task
//         })
//         .then(getTasks())
//         setTaskInput(initInput)
//     }

//     function onOpenModal() {
//         setOpen(true)
//     }

//     function onCloseModal() {
//         setOpen(false)
//     }

    return (
        <div>
            {/* <button onClick={onOpenModal}>Create Task</button>
              <Modal open={open} onClose={onCloseModal} center>
                <h2>Create a New Task</h2>
                <input name="task" value={taskInput.task} onChange={handleChange} />
                <button onClick={submitTasks}>Submit</button>
              </Modal> */}
            {/* <button onClick={toggle}>Create Task</button> */}
            {/* {
                isToggled ?
                <div>
                    <input name="task" value={taskInput.task} onChange={handleChange} />
                    <button onClick={submitTasks}>Submit</button>
                    <button onClick={toggle}>Close</button>
                </div>
                :
                null
            } */}
            {/* when button is clicked, maybe a modal will appear. Input, submit btn, cancel btn, will be in modal.
                cancel button will be like a toggle
                when task is created:
                (1) it will be stored in the container that holds all of the tasks
                (2) it will be stored in the benchmarkTasks collection in firebase
            */}
                {taskName.map(item => 
                    // {console.log(item.id, "test")}
                    <>
                        <p>{item.task}</p>
                        {/* <button onClick={() => deleteTasks(item.id)}>Delete</button> */}
                    </> 
                   
                )}
        </div>
    )
}