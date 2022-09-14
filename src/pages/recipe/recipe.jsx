import React from 'react';
import { useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';

const formatRecipe = (data) => {
  const initialRecipe = data.meals.at(0);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = initialRecipe[`strIngredient${i}`];
    const value = initialRecipe[`strMeasure${i}`];

    if (!name?.length) {
      continue;
    }

    ingredients.push({ name, value });
  } // n -> n

  // const ingredientsKeys = Array.from(new Array(20), (_, index) => {
  //   const name = initialRecipe[`strIngredient${i + 1}`];
  //   const value = initialRecipe[`strMeasure${i + 1}`];
  //   return { name, value };
  // })
  // .filter(ingredient => !!ingredient.name?.length); // n -> 2n

  console.log(ingredients);
  return null;
};

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);

  if (data?.meals) {
    console.log(formatRecipe(data));
  }

  return (
    <div>
      {categoryName} -{recipeName}
    </div>
  );
};

export default Recipe;
