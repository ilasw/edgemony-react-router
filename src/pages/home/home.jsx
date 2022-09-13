import React from 'react';
import { ENDPOINTS } from '../../utils/api/endpoints.js';
import { useFetch } from '../../utils/api/use-fetch.js';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>Home</h1>
      {data ? (
        <ul>
          {data.categories?.map?.((category) => (
            <li key={category.idCategory}>
              <Link to={`/catalogo/${category.strCategory}`}>
                <img
                  src={category.strCategoryThumb}
                  alt={`preview of ${category.strCategory} category`}
                />
                <h3>{category.strCategory}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default Home;
