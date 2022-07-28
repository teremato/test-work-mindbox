import {render, screen} from '@testing-library/react'
import { TodoItem } from './Todo-item';


const todo = {id: 1, task: 'hi somebody', complete: false}
test('render todo', () => {
    render(<TodoItem todo={todo}/>)
    expect('hi somebody').toBe('hi somebody')
})