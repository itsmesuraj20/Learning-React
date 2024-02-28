import React from 'react';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import Buttons from './components/Buttons';
import './style.css'


function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem />
      <Buttons />
    </div>
  );
}

export default App;
