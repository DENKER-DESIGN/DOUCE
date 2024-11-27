import React, { createContext, useState, useEffect } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const editRecipe = (id, updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe))
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe, editRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
