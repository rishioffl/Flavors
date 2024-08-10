import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ onAddRecipe, onRemoveRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');

  const handleAdd = () => {
    if (recipeName && recipeDescription) {
      onAddRecipe({ name: recipeName, description: recipeDescription });
      setRecipeName('');
      setRecipeDescription('');
    }
  };

  const handleRemove = () => {
    if (recipeName) {
      onRemoveRecipe(recipeName);
      setRecipeName('');
    }
  };

  return (
    <div className="recipe-card">
      <h3>Add or Remove Recipe</h3>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      />
      <div className="button-group">
        <button onClick={handleAdd}>Add Recipe</button>
        <button onClick={handleRemove}>Remove Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
