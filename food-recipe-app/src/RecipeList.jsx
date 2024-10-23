import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
