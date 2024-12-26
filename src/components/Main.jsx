import React from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import Form from "./Form";
export default function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipe , setRecipe] = React.useState("")

  return (
    <main>
      <Form ingredients={ingredients} setIngredients={setIngredients} />

      {ingredients.length > 0 && (
        <Ingredients
          setRecipe = {setRecipe}
          Ingredients={ingredients}
        />
      )}

      {recipe && <Recipe recipe = {recipe}/>}
    </main>
  );
}
