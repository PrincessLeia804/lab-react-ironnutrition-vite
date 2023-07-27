// Your code here
import React from "react";
import { Card, Image, Button } from "antd";

function FoodBox({ props, deleteFood }) {
  


  return (
    <>
      <Card title={props.name} style={{ width: 300 }}>
        <div>
          <Image src={props.image} width={250} />

          <p>Calories: {props.calories}</p>
          <p>Servings {props.servings}</p>

          <p>
            <b>Total Calories: {props.servings * props.calories} </b> kcal
          </p>

          <Button onClick={() => deleteFood(props.id)}>Delete</Button>
        </div>
      </Card>
    </>
  );
}

FoodBox.propTypes = {};

export default FoodBox;
