import React, {useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import {Greet} from './Greet'
import Welcome from './Welcome'
import Message from './Message'
import Count from './Count'
// import uuidv4 from 'src/uuid/v4'
import {v4 as uuidv4} from 'uuid'
const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  // useEffects
  useEffect(() => {
    const storesTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storesTodos) setTodos(storesTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  // functions
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete=!todo.complete
    setTodos(newTodos)
  }
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(),name:name,complete:false}]
    })
    todoNameRef.current.value = null
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> 
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todo</button>
      <div>{todos.filter(todo => !todo.complete).length} left todo</div> */}
      <br></br>
      {/* <Greet name="Sam puth" lang="React.js"/>
      <Welcome lang="JavaScript React" /> */}
      {/* <Message /> */}
      <Count count = "19" />
    </>
  );
}

export default App;
