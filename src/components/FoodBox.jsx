// Your code here
import React from "react";

function FoodBox({props, deleteFood}) {
  return (
    <div>
      <div>
        <h4>{props.name}</h4>

        <img src={props.image} style={{ height: "200px" }} />

        <p>Calories: {props.calories}</p>
        <p>Servings {props.servings}</p>

        <p>
          <b>Total Calories: {props.servings * props.calories} </b>{" "}
          kcal
        </p>

        <button onClick={() => deleteFood(props.id)}>Delete</button>
      </div>
    </div>
  );
}

FoodBox.propTypes = {};

export default FoodBox;
