import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foodsJson)

  const deleteFood = (id) => {
    setFoodList(prevFood => {
    return prevFood.filter(foods => foods.id !== id)})
  }

  const addNewFood = (newFood) => {
    setFoodList([newFood, ...foodList])
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm  addFood={addNewFood}/>
      {foodList.map((food) => {
        return (
          <div key={food.id}>
            <FoodBox props={food} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
