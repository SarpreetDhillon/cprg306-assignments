'use client';
import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas || []);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} width="100" height="100" />
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p>Select an item to see meal ideas</p>
      )}
    </div>
  );
};

export default MealIdeas;
