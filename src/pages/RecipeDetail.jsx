import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/RecipeDetail";

export const loader = async ({ params }) => {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
  );
  const data = await response.json();
  return { recipe: data };
};

const RecipeDetail = () => {
  const { recipe } = useLoaderData();

  return (
    <Wrapper>
      <h1>{recipe.title}</h1>
      <div className="details">
        <img src={recipe.image} alt={recipe.title} />
        <div className="details-text">
          <div className="detail-section">
            <h2>Health Information:</h2>
            <ul>
              {recipe.vegan && <li>Vegan</li>}
              {recipe.vegetarian && <li>Vegetarian</li>}
              {recipe.dairyFree && <li>Dairy-free</li>}
              {recipe.glutenFree && <li>Gluten-free</li>}
            </ul>
          </div>
          <div className="detail-section">
            <h2>Ingredients:</h2>
            <ul>
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="detail-section">
        <h2>Cooking Instructions:</h2>
        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </div>
    </Wrapper>
  );
};

export default RecipeDetail;
