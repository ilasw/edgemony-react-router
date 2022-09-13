import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';

export const Catalog = () => {
  const params = useParams();
  const { categoryName } = params;

  const { data, loading, error } = useFetch(
    `${ENDPOINTS.FILTER}?c=${categoryName}`
  );

  if (loading) {
    return 'Caricamento...';
  }

  if (!data?.meals?.length) {
    return 'Not found';
  }

  return (
    <div>
      {data.meals.map((meal) => (
        <li key={meal.idMeal}>
          <Link to={`/catalogo/${categoryName}/${meal.strMeal}`}>
            {meal.strMeal}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Catalog;
