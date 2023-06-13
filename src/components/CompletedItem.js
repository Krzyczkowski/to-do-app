import React from 'react';

function CompletedItem({ todo }) {
  return (
    <li className="completed-item">
      <b>{todo.name} </b>({todo.completedAt})
    </li>
  );
}

export default CompletedItem;
