import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  let handlNewItem = (newItem, itemDate) => {
    let newTodoItem = [
      ...todoItems,
      {
        item: newItem,
        date: itemDate,
      },
    ];
    setTodoItems(newTodoItem);
    console.log(`${newItem} and ${itemDate}`);
  };

  let handleDeleteItem = (itemName) => {
    const newItems = todoItems.filter((itr) => itr.item !== itemName);
    setTodoItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <div className="item-container">
        <AppTodo handlNewItem={handlNewItem} />
        {todoItems.length <= 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          items={todoItems}
          handleDeleteItem={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
