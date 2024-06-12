import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todo-item-store";

const todoItemReducer = (currentTodoItem, action) => {
  let newTodoItem = currentTodoItem;
  if (action.type === 'NEW_ITEM'){
    newTodoItem = [
      ...currentTodoItem,
      {
        item: action.payload.newItem,
        date: action.payload.itemDate,
      },
    ];


  }else if(action.type === 'DELETE_ITEM') {
    newTodoItem = currentTodoItem.filter((itr) => itr.item !== action.payload.itemName);
  }
  return newTodoItem;
};

function App() {
  //const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  let addNewItem = (newItem, itemDate) => {
    const newTodoItemAction = {
      type: "NEW_ITEM",
      payload: {
        newItem,
        itemDate
      }
    };
    dispatchTodoItem(newTodoItemAction);

    
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { item: newItem, date: itemDate },
    // ]);
    console.log(`${newItem} and ${itemDate}`);
  };

  let deleteItem = (itemName) => {
    const delteTodoItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName
      }
    };
    dispatchTodoItem(delteTodoItemAction);
  };
  
  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <div className="item-container">
          <AppTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
