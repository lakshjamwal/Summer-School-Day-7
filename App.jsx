import './style.css';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


export default function App(){
  // const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo(title) {
  setTodos(current => [
    ...current,
    { id: crypto.randomUUID(), title, completed: false }
  ]);
}


  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return{...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }
  return (
    <>
    <TodoInput onSubmit={addTodo} />
<h1 className="header">To-Do List</h1>
<TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  )
}
