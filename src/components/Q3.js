const Q3 = ({ books }) => {
  return (
    <div>
      <ul>
        {books.map(({ title, author, rating }) => (
          <li>
            {title}: {author} {rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q3;
