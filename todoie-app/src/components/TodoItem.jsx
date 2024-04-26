import React from 'react'

const TodoItem = (props) => {
  return (
    <li>
    <span>
        <input type="checkbox" />{/*  */}
        <span className="todo-item-text">{props.title}</span>
    </span>
    </li>  
  )
}

export default TodoItem