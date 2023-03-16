const Q2 = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(({ name, price, category }) => (
          <li>
            {name}: ₹{price} ({category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q2;
