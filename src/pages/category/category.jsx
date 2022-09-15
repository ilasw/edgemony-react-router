import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MealList } from '../../components/meal-list';

export const Category = () => {
  const { categoryName } = useParams();
  const data = useLoaderData();

  if (!data) {
    return 'Caricamento...';
  }

  if (!data?.meals?.length) {
    return 'Not found';
  }

  return (
    <div>
      <MealList categoryName={categoryName} meals={data?.meals} />
    </div>
  );
};

export default Category;
