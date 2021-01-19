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

  // run once when the app starts
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);

  // USE EFFECT (run every time todos or status updates)
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();  
  }, [todos, status]);

  // // save to local storage
  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }
  // // get from local storage
  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     let todoLocal = localStorage.getItem('todos', JSON.stringify(todos));
  //     setTodos(todoLocal);
  //   }
  // }


  return (
    <div className="App">
      <header>
        <h1>codingWolf's TODO List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
