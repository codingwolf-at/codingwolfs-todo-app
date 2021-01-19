import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form'; 
import TodoList from './components/TodoList';

function App() {
  
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState("all");
  
  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  return (
    <div className="App">
      <header>
        <h1>codingWolf's TODO List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} filteredTodos={filteredTodos} />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
