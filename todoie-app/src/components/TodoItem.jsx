import React from 'react'

const TodoItem = (props) => {
  return (
    <li>
    <span>
        <input type="checkbox" />
        <p>{props.title}</p>
        <span className="todo-item-text">{props.title}</span>
        <p>....</p>
    </span>
    </li>  
  )
}

export default TodoItem