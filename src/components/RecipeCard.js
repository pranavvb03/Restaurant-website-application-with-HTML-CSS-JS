import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} className="recipe-image" />
      <h3 className="recipe-title">{recipe.label}</h3>
      <p className="recipe-source">Source: {recipe.source}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-link">
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
