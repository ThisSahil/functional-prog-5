const Q9 = ({ products }) => {
  return (
    <div>
      <ol>
        {products.map(({ id, name, price, category }) => (
          <li key={id}>
            {name} ₹{price} ({category})
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Q9;
