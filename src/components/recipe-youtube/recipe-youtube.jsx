import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const RecipeYouTube = (props) => {
  const recipe = useOutletContext();
  const { strYoutube } = recipe;
  const link = strYoutube?.replace?.('/watch?v=', '/embed/') ?? '';
  console.log(recipe);

  return (
    <div>
      <iframe
        src={`${link}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
        width="560"
        height="315"
        allowtransparency="true"
        frameborder="0"
      />
    </div>
  );
};
