
// où trouver les infos (url de l'API)
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export class TacheService {

    /**
     * Récupére toutes les taches auprés de l'API
     */
    getTaches(){
        // fetch va envoyer une requête HTTP (verbe GET par default) et retourner une promesse
        // la promesse va contenir (une voir la reponse obtenue) le statut de la reponse et les données demandées
        const promesse = fetch(API_URL);
        return promesse;
    }

    /**
     * Récupére la tache auprés de l'API (à partir de son id)
     */
    getTache(){}

    /**
     * Demande à l'API d'ajouter une tache
     */
    postTache(){}

    /**
     * Demande à l'API d'écraser une tache par une autre (à partir de son id)
     */
    putTache(){}

    /**
     * Demande à l'API de mettre à jour une tache (à partir de son id)
     */
    patchTache(){}

    /**
     * Demande à l'API de supprimer une tache (à partir de son id)
     */
    deleteTache(){}

}

// Object.freeze() "vérouille" l'instance d'une classe (évite d'instancer plusieur un objet de la classe Service)
export default Object.freeze(new TacheService());
