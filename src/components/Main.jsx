export default function Main() {

    const ingredients = ["totato" , "apple" , "bread"];
    
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient");
        ingredients.push(ingredient);
        alert([ingredients])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            <ul>
                {ingredients.map((element , index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </main>
    )
}