const Q4 = ({ employees }) => {
  return (
    <div>
      <ul>
        {employees.map(({ name, department, salary }) => (
          <li>
            {name}: ({department} {salary})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q4;
