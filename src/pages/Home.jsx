import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";
import Wrapper from "../assets/wrappers/Home";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const cuisine = url.searchParams.get("cuisine") || "";
  const page = parseInt(url.searchParams.get("page") || "1");

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  console.log("Fetching data with params:", { searchTerm, cuisine, page });
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchTerm}&cuisine=${cuisine}&number=5&offset=${
        (page - 1) * 5
      }`
    );
    console.log("API Response status:", response.status);
    if (!response.ok) {
      throw new Error(`API returned status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response data:", data);
    return {
      recipes: data.results,
      totalResults: data.totalResults,
      searchTerm,
      cuisine,
      page,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      recipes: [],
      totalResults: 0,
      searchTerm,
      cuisine,
      page,
      error: error.message,
    };
  }
};

const Home = () => {
  const {
    recipes,
    totalResults,
    searchTerm: initialSearchTerm,
    cuisine: initialCuisine,
    page,
  } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [cuisine, setCuisine] = useState(initialCuisine);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchTerm}&cuisine=${cuisine}`);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setCuisine("");
    navigate("/");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
        />
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">All Cuisines</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="chinese">Chinese</option>
          {/* Add more cuisine options */}
        </select>
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearFilters} className="clear">
          Clear Filters
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div className="recipes">
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found. Try a different search term.</p>
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalResults / 5)}
        onPageChange={(newPage) =>
          navigate(`/?search=${searchTerm}&cuisine=${cuisine}&page=${newPage}`)
        }
      />
    </Wrapper>
  );
};

export default Home;
