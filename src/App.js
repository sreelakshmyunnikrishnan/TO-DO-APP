import React, { useState } from "react";
import "./App.css";

// React functional component to create todo application

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [taskList, setAddTask] = useState([]);
  const [edit, setEditValue] = useState("");

  // When the user clicks "Add Task" button, the arrow function is triggered
  const addTaskButtonClick = () => {
    // Create a copy of task list
    const tempTaskList = Array.from(taskList);
    // Add new task to the copy
    tempTaskList.push(value);
    // Update the task list
    setAddTask(tempTaskList);

    // Or

    // setAddTask([...taskList, value])

  };

  return (
    <div className="App">
      <h2>ToDo App </h2>

      {/* Input attribute takes in user input */}
      <input
        type="text"
        // Onchange is triggered when the value of user input is changed or if a new task is added
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button onClick={addTaskButtonClick}>Add a Task</button>

      {/* Iterate through the taskList array to display it as a list */}

      <ul style={{ listStyleType: "none" }}>
        {taskList.map((element, index) => (
          <li key={index}>
            <span>{element}{" "}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
