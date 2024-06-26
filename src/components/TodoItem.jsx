import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";

function TodoItem({ item, date }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => deleteItem(item)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
