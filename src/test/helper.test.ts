import { addTodo } from "./helper"

describe('addTodo', () => {
    it('Добавление todo в массив', () => {
        const startTodos = [
            {id: 1, task: 'one', complete: true},
            {id: 2, task: 'two', complete: false}
        ]
        const newTodo = {id: 3, task: 'three', complete: true}
        const expected = [
            {id: 1, task: 'one', complete: true},
            {id: 2, task: 'two', complete: false},
            {id: 3, task: 'three', complete: true}
        ]

        const result = addTodo(startTodos, newTodo)
        expect(result).toEqual(expected)
    })
})