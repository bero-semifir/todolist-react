import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

// App est la page principale
// Elle enregistre les informations et les transmets aux composant
// Le role des composants enfants est d'afficher les informations

const App = () => {

  // tache à ajouter, envoyé au composant TodoForm
  const [nouvelleTache, setNouvelleTache] = useState({titre: "", estFait: false});

  const [taches, setTaches] = useState([
    { titre: "Faire une app", estFait: true },
    { titre: "Faire les composants", estFait: true },
    { titre: "Faire les modèles", estFait: false },
  ]);

  // fonction qui gére les changements d'un champ du formulaire
  const handleChange = (event) => {
    // On modifie la nouvelle tache avec le retour de l'événement "change"
    /*
      une levée d'événement "change" sur un input ayant pour "name" 'titre' et la "value" 'truc'
      donnera un event.target.name  -> titre
      donnera un event.target.value -> truc
      et donc on peut extraire l'objet {[event.target.name]: event.target.value}
      qui vaudra {titre: "truc"}
    */
    setNouvelleTache({...nouvelleTache, [event.target.name]: event.target.value});
  }

  // fonction qui s'occupe du comportement d'une soumission de formulaire
  const handleSubmit = (event) => {
    // on empêche le navigateur de recharger
    event.preventDefault();
    // on ajoute la tache à la liste de taches
    setTaches([...taches, nouvelleTache]);
    // on remet à zéro le formulaire
    setNouvelleTache({titre: "", estFait: false});
  };

  // Fonction qui gére la supression d'une tache
  const handleDelete = (tache) => {
    // on filtre la tache pour la sortir du tableau
    const newTaches = taches.filter((elem) => elem !== tache);
    // et le résultat du filtre est envoyé dans la nouvelle liste de taches
    setTaches(newTaches);
  }

  const viderTaches = () => {
    setTaches([]);
  }

  return (
    <div>
      <h1>Liste de tâches</h1>
      {/* partie ajout d'une tâche */}
      <TodoForm tache={nouvelleTache} handleSubmit={handleSubmit} handleChange={handleChange}/>

      {/* Affichage de la liste des tâches */}
      <TodoList taches={taches} handleDelete={handleDelete} viderTaches={viderTaches}/>
    </div>
  );
}

export default App;
