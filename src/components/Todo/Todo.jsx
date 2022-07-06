import React from 'react';
import './Todo.css';

const Todo = ({tache, handleDelete}) => {
  return (
    <li>{tache.title} { tache.completed ? "✔" : "❌" }<button
    className='delete-btn'
    onClick={() => handleDelete(tache)}
    >&times;</button></li>
  )
}

export default Todo;
