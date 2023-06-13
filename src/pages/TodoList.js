import React, { useState, useEffect } from 'react';
import '../App.css';
import TodoItem from '../components/TodoItem';
import CompletedItem from '../components/CompletedItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }

    const savedCompleted = localStorage.getItem('completed');
    if (savedCompleted) {
      setCompleted(JSON.parse(savedCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        name: inputValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      const updatedCompleted = [...completed, { ...completedTodo, completedAt: new Date().toLocaleString() }];
      setCompleted(updatedCompleted);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const renderTodos = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onDelete={() => handleDeleteTodo(todo.id)}
      onComplete={() => handleCompleteTodo(todo.id)}
    />
  ));

  const renderCompleted = completed.map((todo) => (
    <CompletedItem key={todo.id} todo={todo} />
  ));

  return (
    <center>
    <div className="TodoList">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new to-do..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='addButton' onClick={handleAddTodo}>Add</button>
      </div>
      <div className="list-container">
        <div className="todo-list">
          <h2>Todo</h2>
          {renderTodos.length ? (
            <ul>{renderTodos}</ul>
          ) : (
            <p>No todos to display</p>
          )}
        </div>
        <div className="completed-list">
          <h2>Completed</h2>
          {renderCompleted.length ? (
            <ul>{renderCompleted}</ul>
          ) : (
            <p>No completed todos</p>
          )}
        </div>
      </div>
    </div>
    </center>
  );
}

export default TodoList;
