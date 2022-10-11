// import React, { useReducer } from 'react'

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// }

// //Our reducer function will take on 2 differnt variables, state & action. State, where our app is currently at & Action which is what we pass into our dispatch function below.
// function reducer(state, action) {
//   switch(action.type){
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 }
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 }
//       default:
//         return state
//     }
  
// }

// export default function App() {
//   //useReducer will take 2 parameters to start
//   //we are returning 2 values: state & dispatch(what we call to update our state)
//   const [state, dispatch] = useReducer(reducer, { count: 0 })


//   function increment() {
//     dispatch({ type: ACTIONS.INCREMENT })
//   }

//   function decrement () {
//     dispatch({ type: ACTIONS.DECREMENT })
//   }

//   return(
//     <>
//     <button onClick={decrement}>-</button>
//     <span>{state.count}</span>
//     <button onClick={increment}>+</button>
//     </>
//   )
// }



//useReducer allows us to manage state in react. This allows us to manage state & re-render a component when a state changes. 
//Converts current state to new state based on the action we send it. 

import React, { useReducer, useState} from 'react'
import Todo from './Todo.js'


//these are our actions for either completing or not completing our todos

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo"
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  




  }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false}
}

export default function App() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: { name: name}})
        setName('')
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange= {e => setName(e.target.value)} />
          </form>
          {/* this will printout/map all of our todo items  */}
          {todos.map(todo => {
            return <Todo key = {todo.id} todo={todo}  dispatch={dispatch} />
          })}
        </>
    )
}