// Your code here
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input } from "antd";

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
    const newFood = { name, image, calories, servings, id: uuidv4() };

    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h2>Add new Food</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onSubmit={handleSubmit}
      >
        <Form.Item label="Name" name="name">
          <Input onChange={handleNameInput} />
        </Form.Item>

        <Form.Item label="Image" name="image" type="text">
          <Input onChange={handleImageInput} />
        </Form.Item>

        <Form.Item label="Calories" name="calories" type="number">
          <Input onChange={handleCaloriesInput} />
        </Form.Item>

        <Form.Item label="Servings" name="servings" type="number">
          <Input onChange={handleServingsInput} />
        </Form.Item>

        <Button type="primary" htmlType="submit">Create</Button>
        {/* <Button type="submit">Create</Button> */}
      </Form>
    </div>
  );
}

export default AddFoodForm;
