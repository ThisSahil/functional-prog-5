const Q10 = ({ recipes }) => {
  return (
    <div>
      <ol>
        {recipes.map(({ name, ingredients, instructions }) => (
          <li>
            <h2> {name}</h2>
            <h3>Ingredients: </h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>

            <h3>Instructions: </h3>
            <ul>
              {instructions.map((instruction) => (
                <li>{instruction}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Q10;
