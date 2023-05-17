import React, { useState } from "react";
import "./App.css";

// React functional component to create todo application
const TodoApp = () => {
  const [addTask, setAddTask] = useState("No Task Added");

// Arrow function triggered when the user clicks 
  const addTaskButtonClick = () =>{
    setAddTask("Task Created")
  }

  return (
    <div className="App">
      <h2>ToDo App </h2>
      <h5>{addTask}</h5>
      <button onClick={addTaskButtonClick} >
        Add a Task
      </button>
    </div>
  );
};

export default TodoApp;
