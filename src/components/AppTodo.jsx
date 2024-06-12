import { useState, useRef, useContext } from "react";
import styles from "./AppTodo.module.css";
import { TodoItemContext } from "../store/todo-item-store";
function AppTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const { addNewItem } = useContext(TodoItemContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleOnClickEvent = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <div className={`container ${styles.text}`}>
      <form className="row todo-row" onSubmit={handleOnClickEvent}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Task"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // value={todoDate}
            // onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppTodo;
