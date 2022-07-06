import React from "react";
import Todo from "../Todo/Todo";

/**
 * Met en forme la liste des taches
 * @param {Tache[]} taches Liste des taches à afficher
 */
const TodoList = ({ taches, handleDelete, viderTaches }) => {
  // useState pas necessaire car le composant ne gére pas la valeur "aFaire"
  let aFaire = taches.filter((tache) => tache.estFait === false);

  const genererMessage = () => {
    if (taches.length > 0) {
      return (
        <p>
          Il reste {aFaire.length} à faire sur {taches.length}
        </p>
      );
    } else {
      return <p>Bravo ! Aucune taches à faire !</p>;
    }
  };

  return (
    <>
      { genererMessage() }
      <progress value={aFaire.length} max={taches.length} />
      {taches.length ? (
        <ul>
          {taches.map((tache) => {
            return (
              <Todo
                key={tache.titre}
                tache={tache}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      ) : (
        <p>Aucunes taches</p>
      )}
      <button onClick={viderTaches}>Vider la liste</button>
    </>
  );
};

export default TodoList;
