const Q1 = ({ movies }) => {
  return (
    <div>
      <h3> Favourite Movies List </h3>
      <ul>
        {movies.map(({ title, director }) => (
          <li>
            {title}: ({director})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q1;
