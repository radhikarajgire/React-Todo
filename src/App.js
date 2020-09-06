import React, { useState } from "react";
import trashIcon from "./trash.svg";

function App() {
  const [taskInput, updateTaskInput] = useState("");
  const [toDoList, updateToDoList] = useState([]);
  const addNote = () => {
    toDoList.push({ description: taskInput });
    updateToDoList(toDoList);
    updateTaskInput("");
  };
  return (
    <div className="app-background">
      <p className="heading-text">My To-do List </p>
      <div className="task-container">
        <div>
          <input
            className="text-input"
            value={taskInput}
            onChange={(e) => updateTaskInput(e.target.value)}
          />
          <button className="add-button" onClick={addNote}>
            Add
          </button>
        </div>

        {toDoList?.length ? (toDoList.map((toDoObject, index) => <ListItem index={index} itemData={toDoObject}/>) ) :
         ( <p className="no-item-text"> No Task Added! </p> )}
      </div>

      <p className="footer-text"> Radhika's Todo</p>
    </div>
  );
}
function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span>{props.itemData.description}</span>
      <img src={trashIcon} className="delete-icon" />
    </div>
  );
}

export default App;
