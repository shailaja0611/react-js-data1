import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Ready in: {recipe.readyInMinutes} minutes</p>
    </div>
  );
};

export default Recipe;
