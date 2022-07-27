import { ITodo } from "../Types/ITodo";

export const addTodo = (list: Array<ITodo>, item: ITodo) => [...list, item]