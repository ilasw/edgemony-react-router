import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);
  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);
  const recipe = data?.meals?.at(0) ?? null;

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

        <ul className="nav nav-tabs mb-5">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>

        {!!recipe &&
          indexes.map((index) => (
            <div>
              {recipe[`strIngredient${index}`]?.length ? (
                <>
                  {recipe[`strIngredient${index}`]}:
                  {recipe[`strMeasure${index}`]}
                </>
              ) : null}
            </div>
          ))}

        {/* {tab === 'youtube' && <p>{data.youtubeUrl}</p>}
      {tab === 'instructions' && <p>{data.instructions}</p>} */}
      </div>
    </>
  );
};

export default Recipe;
