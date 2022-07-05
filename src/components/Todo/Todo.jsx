import React from 'react';

const Todo = ({tache}) => {
  return (
    <li>{tache.titre} { tache.estFait ? "✔" : "❌" }</li>
  )
}

export default Todo;