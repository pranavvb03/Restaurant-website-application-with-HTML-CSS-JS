import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeFinder.css';

function RecipeFinder() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Define your Edamam API credentials directly in the fetch URL
  const fetchRecipes = async () => {
    const appId = "c5ed9352"; // replace with your actual App ID
    const appKey = "d589f16bb6b82dd5a46acdbbde4b5759";	
// replace with your actual App Key

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <section id="recipes" className="recipe-finder">
      <h2 className="recipe-finder-title">Find a Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-finder-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="recipe-finder-input"
        />
        <button type="submit" className="recipe-finder-button">Search</button>
      </form>
      <div className="recipe-results">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <p>Check out our curated lists of mouth-watering recipes! Just type your favourite food item in the search box and see the magic unfold!</p>
        )}
      </div> 
    </section>
  );
}

export default RecipeFinder;

