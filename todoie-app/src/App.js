import React from 'react';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import Buttons from './components/Buttons';
import './style.css'


function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem title="Hello World" />
      <TodoItem title="World" />
      <TodoItem title="Todoie" />
      <Buttons />
    </div>
  );
}

export default App;
