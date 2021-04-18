import React from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos]=React.useState([
    // { id: 1, completed: false, title: "Купить хлеб" },
    // { id: 2, completed: false, title: "Купить масло" },
    // { id: 3, completed: false, title: "Купить молоко " }
  ])
  function onChange(id){
    setTodos(todos.map(todo=>{
      if(id===todo.id) todo.completed=!todo.completed
      return todo
    })
    )
  }
  function removeTodo(id){
    setTodos(todos.filter(todo=>id!==todo.id))
  }
  function createTodo(note){
    setTodos([...todos, {
      id: Date.now(),
      completed: false,
      title: note
    }])
  }
  return (
    <div className="main">
      <h1>Список дел</h1>
      <TodoList todos={todos} onChange={onChange} removeTodo={removeTodo}/>
      <AddTodo createTodo={createTodo}/>
    </div>
  ); 
}

export default App;
