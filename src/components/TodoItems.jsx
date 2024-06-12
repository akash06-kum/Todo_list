import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemContext);
  console.log(`Value from context ${todoItems}`);
  return (
    <>
      {todoItems.map((itr) => (
        <TodoItem key={itr.item} item={itr.item} date={itr.date} />
      ))}
    </>
  );
};
export default TodoItems;
