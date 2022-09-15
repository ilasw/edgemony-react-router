import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const RecipeYouTube = (props) => {
  const recipe = useOutletContext();
  const { youtubeUrl } = recipe;

  console.log(recipe);

  return <div>Youtube url: "{youtubeUrl}"</div>;
};
