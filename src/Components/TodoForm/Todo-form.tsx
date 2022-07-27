import React, { FC, useState } from "react";
import { ITodo } from "../../Types/ITodo";
import { VisionMode } from "../../Constans/Vison-mode";
import { TodoItem } from "../TotoItem/Todo-item";
import classes from './Todo-form.module.css'

export const TodoForm: FC = () => {

    const [userInput, setUserInput] = useState<string>('')
    const [todos, setTodos] = useState<Array<ITodo>>([])
    const [visionMode, setVisionMode] = useState<string>(VisionMode.VISION_ALL)

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(userInput){
            return setTodos([...todos, {id: Date.now(), task: userInput, complete: false}])
        }
    }
    const todoDone = (id: number) => {
        setTodos([...todos.map((todo) => {
            if(todo.id === id) {return {...todo, complete: !todo.complete}}
            return todo
        })])
    }
    const removeTodo = (id: number) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>ToDo</div>
            <form onSubmit={(e) => addTodo(e)} className={classes.form}>
                <input onChange={(e) => setUserInput(e.currentTarget.value)}
                 placeholder='add new task...'
                 value={userInput}/>
                <button>ADD</button>
            </form>
            <div className={classes.vision_mode}>
                <button className={(visionMode === VisionMode.VISION_ALL) ? `${classes.btn_active} ${classes.btn}` : classes.btn}
                 onClick={() => setVisionMode(VisionMode.VISION_ALL)}>all</button>
                <button className={(visionMode === VisionMode.VISION_ACTIVE) ? `${classes.btn_active} ${classes.btn}` : classes.btn}
                onClick={() => setVisionMode(VisionMode.VISION_ACTIVE)}>active</button>
                <button className={(visionMode === VisionMode.VISION_COMPLETED) ? `${classes.btn} ${classes.btn_active}` : classes.btn}
                onClick={() => setVisionMode(VisionMode.VISION_COMPLETED)}>completed</button>
            </div>
            <div className={classes.todo_list}>
            {
                todos.map((todo) => {
                    switch(visionMode) {
                        case VisionMode.VISION_COMPLETED:
                            return (todo.complete) ? <TodoItem 
                            todo={todo}
                            removeTodo={removeTodo}
                            todoDone={todoDone}/> : ''
                        case VisionMode.VISION_ACTIVE:
                            return (!todo.complete) ? <TodoItem todo={todo}
                            removeTodo={removeTodo}
                            todoDone={todos}/> : ''
                        default: return <TodoItem todo={todo}
                        removeTodo={removeTodo}
                        todoDone={todoDone}/>
                    }
                })
            }
            </div>
        </div>
    )
}