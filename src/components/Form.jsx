export default function Form({ingredients , setIngredients}){

  function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const ingredient = formData.get("ingredient");
    setIngredients([...ingredients, ingredient]);
    formElement.reset();
  }


    return (
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>

      </form>


    )
}