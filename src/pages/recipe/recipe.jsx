import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';

const formatRecipe = (data) => {
  const initialRecipe = data.meals?.at(0) ?? {};

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

  return {
    name: initialRecipe.strMeal,
    id: initialRecipe.idMeal,
    youtubeUrl: initialRecipe.strYoutube,
    thumbnailSrc: initialRecipe.strMealThumb,
    tags: initialRecipe.strTags,
    instructions: initialRecipe.strInstructions,
    ingredients,
  };
};

export const Recipe = (props) => {
  const { tab } = props;
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.DETEAIL}?i=${id}`,
    formatRecipe
  );

  if (!data) {
    return 'loading...';
  }

  return (
    <div>
      <h1>
        {categoryName} -{recipeName}
      </h1>

      <ul>
        <li>Istruzioni</li>
        <li>Ingredienti</li>
        <li>YouTube</li>
      </ul>

      <Outlet context={data} />

      {/* {tab === 'youtube' && <p>{data.youtubeUrl}</p>}
      {tab === 'instructions' && <p>{data.instructions}</p>} */}
    </div>
  );
};

export default Recipe;
