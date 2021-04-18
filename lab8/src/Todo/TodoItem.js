import React from "react";

function TodoItem({ todo, index, onChange, removeTodo}) {
  const classes = [];
  if (todo.completed) {
    classes.push("completed");
  }
  console.log(todo);
  const [todoInput, setTodoInput]=React.useState(todo.title);
  return (
    <li className="item">
      <span>
        <input type="checkbox" onChange={() => onChange(todo.id)} checked={todo.completed} />
        <span> </span>
        <input id="todo-input" className={classes.join(" ")} type="text" value={todoInput} onChange={event=>setTodoInput(event.target.value)}></input>
      </span>
      <button className="delete" onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
