import React, { useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useContext } from 'react';

function RecipeForm() {
  const { addRecipe } = useContext(RecipeContext);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
    };

    addRecipe(newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
