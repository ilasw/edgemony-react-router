import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CategoryList } from '../../components/category-list/index.js';

export const Home = () => {
  const data = useLoaderData();
  console.log('sono in home', data);

  if (!data) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>Home</h1>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default Home;
