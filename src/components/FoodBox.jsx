function Foodbox(props) {
  const { food, clickToDelete } = props;
  const totalCal = food.servings * food.calories;

  return (
    <div className="foodCard">
      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {totalCal} kcal</b>
      </p>

      <button onClick={() => clickToDelete(food.id)}>Delete</button>
    </div>
  );
}

export default Foodbox;
