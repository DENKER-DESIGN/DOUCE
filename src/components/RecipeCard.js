import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

function RecipeCard({ recipe }) {
  const { deleteRecipe, editRecipe } = useContext(RecipeContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(recipe.title);
  const [updatedIngredients, setUpdatedIngredients] = useState(recipe.ingredients);
  const [updatedInstructions, setUpdatedInstructions] = useState(recipe.instructions);

  const handleEdit = () => {
    if (isEditing) {
      const updatedRecipe = {
        title: updatedTitle,
        ingredients: updatedIngredients,
        instructions: updatedInstructions,
      };
      editRecipe(recipe.id, updatedRecipe);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="recipe-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedIngredients}
            onChange={(e) => setUpdatedIngredients(e.target.value)}
          />
          <textarea
            value={updatedInstructions}
            onChange={(e) => setUpdatedInstructions(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </>
      )}
      <button className='dou' onClick={handleEdit}>
        {isEditing ? 'Save Changes' : 'Edit Recipe'}
      </button>
      <button className='den' onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
    </div>
  );
}

export default RecipeCard;
