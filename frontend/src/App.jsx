
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import { useState } from 'react'

function App() {
  const [todos , setTodos] = useState([])

  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div> 
  )
}

export default App
