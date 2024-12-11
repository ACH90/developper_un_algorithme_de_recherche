import recipes from "../data/recipes";

// Si vous avez besoin d'une console pour vérifier les données
// console.log(recipes);
const data = recipes;

export { data };

// Par défaut, export d'un composant neutre si nécessaire
function dataLoader() {
  return recipes;
}

export default dataLoader;
