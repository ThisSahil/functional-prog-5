const Q6 = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map(({ make, model, price }) => (
          <li>
            {make} ({model}) ₹{price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q6;
