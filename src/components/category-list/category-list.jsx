import React from 'react';
import { CategoryListItem } from '../category-list-item';

export const LazyCategoryListItem = React.lazy(() =>
  import('../category-list-item/category-list-item.jsx')
);

export const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <section className="CategoryList">
      <ul>
        {categories.map((category) => (
          <React.Suspense fallback={'loading!'}>
            <LazyCategoryListItem
              key={category.idCategory}
              category={category}
            />
          </React.Suspense>
        ))}
      </ul>
    </section>
  );
};
