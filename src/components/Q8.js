const Q8 = ({ movies }) => {
  return (
    <div>
      <ol>
        {movies.map(({ title, director, runtime }) => (
          <li>
            {title} ({director} {runtime})
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Q8;
