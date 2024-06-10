import TodoItem from "./TodoItem";
const TodoItems = ({ items, handleDeleteItem }) => {
  return (
    <>
      {items.map((itr) => (
        <TodoItem key={itr.item} item={itr.item} date={itr.date} deleteItem={handleDeleteItem} />
      ))}
    </>
  );
};
export default TodoItems;
