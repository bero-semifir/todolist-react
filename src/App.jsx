import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

// App est la page principale
// Elle enregistre les informations et les transmets aux composant
// Le role des composants enfants est d'afficher les informations

function App() {
  const [taches, setTaches] = useState([
    { titre: "Faire une app", estFait: true },
    { titre: "Faire les composants", estFait: true },
    { titre: "Faire les modèles", estFait: false },
  ]);

  return (
    <div>
      <h1>Liste de tâches</h1>
      {/* partie ajout d'une tâche */}
      <div>
        <form>
          <label htmlFor="tache-input">Nom de la tâche</label>
          <input type="text" />
          <button type="submit">Ajouter une tâche</button>
        </form>
      </div>

      {/* Affichage de la liste des tâches */}
      <TodoList taches={taches} />
    </div>
  );
}

export default App;
