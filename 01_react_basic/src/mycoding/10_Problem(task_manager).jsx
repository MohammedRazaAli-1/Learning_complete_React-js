// Mini Project Challenge — Task Manager
// Build a small Task Manager component.
// 1️⃣ State
// You must create two states:
// const [task, setTask] = useState("")
// const [tasks, setTasks] = useState([])
// 2️⃣ Input
// Create an input field where user can type a task.
// Example:
// Buy milk
// Study React
// Do workout
// Use controlled input.
// 3️⃣ Add Task Button
// Add button:
// Add Task
// When clicked:
// Add task to list
// Do not allow empty tasks
// Clear input after adding
// 4️⃣ Display Tasks
// Render tasks using .map().
// Example UI:
// • Buy milk
// • Study React
// • Do workout
// 5️⃣ Delete Task
// Each task should have a Delete button.
// Example:
// • Buy milk      [Delete]
// • Study React   [Delete]
// • Do workout    [Delete]
// Clicking delete removes only that task.
// Use filter().
// 6️⃣ Conditional Rendering
// If there are no tasks, show:
// No tasks available

import { useState } from "react"
const Task_manager = () => {
    const [newTask , setNewtask] = useState("")
    const [displayTask , setDisplayTask] = useState([]);
    let addTaskFunction = () =>{
        if(newTask.trim() !==""){
        setDisplayTask( prev => [...prev , newTask])
        setNewtask("")
        }
    }
    let deleteTask = (index) =>{
        let newarray = displayTask.filter((_, ind)=>ind !== index)
        setDisplayTask(newarray)

    }

  return (
    <div>
        <input style={{fontSize: "30px"}}
        type="text"
        value={newTask}
        onChange={e => setNewtask(e.target.value)}
         />

         <button onClick={addTaskFunction}>Add Task </button>
         
         {displayTask.length === 0 ? <h1> No task is available </h1> :
          <ul>
            {displayTask.map((elem , ind)  => (<li key={ind}>{elem} <button style={{fontSize:"12px"}} onClick={ () => deleteTask(ind)}> Delete</button></li>  ))}
         </ul>}
         



         

    </div>
  )
}

export default Task_manager