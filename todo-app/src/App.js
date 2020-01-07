import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={require("./pictures/cat-checklist.jpg")} className="logo" alt="cat writing" />
      </div>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value="First Item" />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;
