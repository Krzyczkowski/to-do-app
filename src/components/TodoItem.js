import React from 'react';
import '../App.css';

function TodoItem({ todo, onDelete, onComplete }) {
  return (
    <li className="todo-item">
      {todo.name}
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
      <button className="complete-button" onClick={onComplete}>
        Completed
      </button>
    </li>
  );
}

export default TodoItem;
