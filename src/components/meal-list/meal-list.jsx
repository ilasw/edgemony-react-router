import React from 'react';
import {MealListItem} from "../meal-list-item";
import styles from "./meal-list.module.scss"

export const MealList = (props) => {
  const {meals = [], categoryName = ''} = props;

  return (
      <section className="MealList">
        <ul className={styles.grid}>
          {meals.map((meal) => (
              <MealListItem key={meal.idMeal}
                            meal={meal}
                            categoryName={categoryName}
              />
          ))}
        </ul>
      </section>
  );
};
