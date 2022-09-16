import React, { Suspense } from 'react';
import { useLoaderData, Await, useSearchParams } from 'react-router-dom';
import { CategoryList } from '../../components/category-list/index.js';

export const Home = () => {
  const { categories } = useLoaderData();
  const [search, setSearch] = useSearchParams();

  const page = search?.get('page') ?? 1;
  const perPage = 4;
  const paginated = React.useMemo(() => {
    return categories?.slice((page - 1) * perPage, page * perPage);
  }, [page, categories]);

  const handlePageChange = (variation) => {
    setSearch((prev) => {
      return { page: Number(prev.get('page')) + variation };
    });
  };

  return (
    <div>
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
        <Await
          resolve={categories}
          errorElement={<div>Could not load reviews 😬</div>}
        >
          {() => <CategoryList categories={paginated} />}
        </Await>
      </Suspense>
      <div>
        <button onClick={handlePageChange.bind(this, -1)}>Prev</button>
        <button onClick={handlePageChange.bind(this, +1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
