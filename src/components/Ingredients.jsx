import { getRecipeFromMistral } from "../ai";
export default function Ingredients(props) {



 const JSXIngredients = props.Ingredients.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  async function handleClick(){
    const res = await getRecipeFromMistral(props.Ingredients);
    await props.setRecipe(res);
  }

  return <section>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite">
      {JSXIngredients}
    </ul>
    {props.Ingredients.length > 3 && <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={handleClick}>Get a recipe</button>
    </div>}
  </section>
}
