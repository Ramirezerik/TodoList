// import React, { useReducer, useState} from 'react'

// //these are our actions for either completing or not completing our todos

// const ACTIONS = {
//     ADD_TODO: "add-todo",
//     TOGGLE_TODO: "toggle-todo"
// }

// function reducer(todos, action) {
//     switch (action.type) {
//         case ACTIONS.ADD_TODO:
//             return [...todos, newTodo(action.payload.name)]
//         case ACTIONS.TOGGLE_TODO:
//     }
// }

// function newTodo(name) {
//     return {id: Date.now(), name: name, complete: false}
// }

// export default function App() {
//     const [todos, dispatch] = useReducer(reducer, [])
//     const [name, setName] = useState('')

//     function handleSubmit(e) {
//         e.preventDefault()
//         dispatch({type: ACTIONS.ADD_TODO, payload: { name: name}})
//         setName('')
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange= {e => setName(e.target.value)} />
//             </form>
//             {/* this will printout/map all of our todo items  */}
//             {todos.map(todo => {
//                 <Todo key = {todo.id} todo={todo} />
//             })}
//         </>
//     )
// }