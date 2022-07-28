import { FC } from "react";
import { ITodo } from "../../Types/ITodo";
import classes from "./Todo-item.module.css"

interface PropTodoItem {
    todo: ITodo,
    todoDone?: any,
    removeTodo?: any,
}

export const TodoItem: FC<PropTodoItem> = ({todo, todoDone, removeTodo}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.btn_controller}>
                <div className={(todo.complete) ? `${classes.btn} ${classes.active}` : `${classes.btn} ${classes.compl}`}
                onClick={() => todoDone(todo.id)}></div>
                <div className={`${classes.btn} ${classes.remove}`}
                onClick={() => removeTodo(todo.id)}></div>
            </div>
            <div style={{textDecoration: (todo.complete) ? `line-through` : 'none',}}>{todo.task}</div>
        </div>
    )
}