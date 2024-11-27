import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

function RecipeList() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
