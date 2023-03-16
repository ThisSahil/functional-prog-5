const Q5 = ({ recepies }) => {
  return (
    <div>
      <ul>
        {recepies.map(({ name, creator }) => (
          <li>
            {name}: ({creator})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q5;
