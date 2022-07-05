import React from "react";
import Todo from "../Todo/Todo";

/**
 * Met en forme la liste des taches
 * @param {Tache[]} taches Liste des taches à afficher
 */
const TodoList = ({ taches }) => {
  return (
    <>
      <p>Il reste {taches.length} à faire</p>
      <ul>
        {taches.map((tache) => {
          return <Todo key={tache.titre} tache={tache} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
