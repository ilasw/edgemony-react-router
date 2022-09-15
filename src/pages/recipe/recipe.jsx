import React from 'react';
import { Outlet, useParams, Link, NavLink } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? null;

  const tabs = [
    { label: 'Ricetta', path: './istruzioni' },
    { label: 'Ingredienti', path: './ingredienti' },
    { label: 'YouTube', path: './youtube' },
  ];

  if (!data || loading) {
    return 'loading...';
  }

  console.log(data);

  return (
    <>
      <div className="container">
        <header>
          <div className="row">
            <div className="col-auto">
              <figure>
                <img width={100} src={recipe.strMealThumb} alt={recipeName} />
              </figure>
            </div>
            <div className="col">
              <h2 className={'fs-6'}>
                <Link to={`/catalogo/${categoryName}`}>{categoryName}</Link>
              </h2>
              <h1 className={'fs-2'}>{recipeName}</h1>
            </div>
          </div>
        </header>

        <ul className="nav nav-tabs">
          {tabs.map(({ label, path }) => (
            <li className="nav-item" key={path}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : 'not-active'}`
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={recipe} />

        {/* {} */}
      </div>
    </>
  );
};

export default Recipe;
