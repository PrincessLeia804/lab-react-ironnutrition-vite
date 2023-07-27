import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import { Col, Card, Image, Button, Divider, Row } from "antd";
import SearchBar from "./SearchBar";

function FoodList() {
  const [foodList, setFoodList] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState();

  const deleteFood = (id) => {
    setFoodList((prevFood) => {
      return prevFood.filter((foods) => foods.id !== id);
    });
  };

  const addNewFood = (newFood) => {
    setFoodList([newFood, ...foodList]);
  };

  // const searchFood = (byLetters) => {
  //   console.log('byLetters: ', byLetters);
    
  //   let foodListCopy = [...foodList]
  //   foodListCopy.filter((food) => food.name.toLowerCase().includes(byLetters.toLowerCase()))
  //   console.log('foodListCopy: ', foodListCopy);

  //   setFoodList()
  //   // setFoodList((currFoodList) => {
  //   //   console.log('currFoodList: ', currFoodList);
  //   //   return currFoodList.filter((food) => food.name.toLowerCase().includes(byLetters.toLowerCase()))
  //   // })
  // }


  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addFood={addNewFood} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {foodList.filter((filterFood) => {
        if(filterFood.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return filterFood
        }
      })
      .map((food) => {
        return (
          <div key={food.id}>
            <Divider orientation="left"></Divider>
            <Row gutter={16}>
              <Row className="gutter-row" span={6}>
                <FoodBox props={food} deleteFood={deleteFood} />
              </Row>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default FoodList;
