const TodoForm = ({tache, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titre">Nom de la tâche</label>
      <input
        type="text"
        id="titre"
        name="titre"
        value={tache.titre}
        onChange={handleChange} />
      <button type="submit">Ajouter une tâche</button>
    </form>
  );
};

export default TodoForm;
