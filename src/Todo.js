import React from 'react'
import { ACTIONS } from './App.js'

export default function Todo( {todo, dispatch} ){
    return (
        <div>
            {/* style in our span component helps us distinguish if a task/todo is complete or not  */}
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
                <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id }})} >Toggle</button>
                <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id }})} >Delete</button>
                
            </span>
        </div>
    )
}
