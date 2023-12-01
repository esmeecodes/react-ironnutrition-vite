import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (name) => setName(name.target.value);
  const handleImageInput = (image) => setImage(image.target.value);
  const handleCaloriesInput = (calories) => setCalories(calories.target.value);
  const handleServingsInput = (servings) => setServings(servings.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, servings, calories };
    console.log("submitted new food!");
    console.log(newFood);

    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div className="AddMovie">
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameInput} />
      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleImageInput}
      />
      <label>Calories:</label>
      <input
        type="text"
        name="calories"
        value={calories}
        onChange={handleCaloriesInput}
      />
      <label>Servings:</label>
      <input
        type="text"
        name="servings"
        value={servings}
        onChange={handleServingsInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
}

export default AddFoodForm;
