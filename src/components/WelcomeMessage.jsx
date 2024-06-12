import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
import styles from './WelcomeMessage.module.css'
const WelcomeMessage = () => {
    const {todoItems} = useContext(TodoItemContext);
    
    return todoItems.length === 0 && <p className={styles.text}>Enjoy your day</p>
}

export default WelcomeMessage;