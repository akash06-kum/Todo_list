import { useState } from "react";
import styles from './AppTodo.module.css'
function AppTodo({ handlNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnClickEvent = () => {
    handlNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className={`container ${styles.text}`}>
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Task"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-button"
            value={todoDate}
            onClick={handleOnClickEvent}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
