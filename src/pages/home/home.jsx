import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { CategoryList } from '../../components/category-list/index.js';

export const Home = () => {
  const { categories } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
        <Await
          resolve={categories}
          errorElement={<div>Could not load reviews 😬</div>}
        >
          {(categories) => <CategoryList categories={categories} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Home;
