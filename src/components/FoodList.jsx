import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    const allFoods = [...foods, newFood];
    setFoods(allFoods);
  };

  const deleteFood = (foodId) => {
    const displayedFoods = foods.filter((foodItem) => {
      return foodItem.id !== foodId;
    });
    setFoods(displayedFoods);
  };

  return (
    <div className="FoodList">
      <AddFoodForm addFood={addFood} />
      <h1>FoodList</h1>
      {foods.map((foodItem) => {
        return (
          <FoodBox
            key={foodItem.id}
            food={foodItem}
            clickToDelete={deleteFood}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
