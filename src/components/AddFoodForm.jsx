// Your code here
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);


  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings, id: uuidv4()};

    props.addFood(newFood)

    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleNameInput} />

        <label>Image:</label>
        <input type="text" name="image" onChange={handleImageInput} />

        <label>Calories:</label>
        <input type="number" name="calories" onChange={handleCaloriesInput} />

        <label>Servings:</label>
        <input type="number" name="servings" onChange={handleServingsInput} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
