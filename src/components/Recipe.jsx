import ReactMarkdown from 'react-markdown'
export default function Recipe({recipe}) {
  console.log(recipe)
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      {<ReactMarkdown>{recipe}</ReactMarkdown>}
    </section>
  );

}
