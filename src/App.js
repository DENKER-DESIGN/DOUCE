// src/App.js
import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <h1>My Recipe Book</h1>
        <RecipeForm />
        <RecipeList />
      </div>
    </RecipeProvider>
  );
}

export default App;
