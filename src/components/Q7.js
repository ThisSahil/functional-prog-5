const Q7 = ({ students }) => {
  return (
    <div>
      <ol>
        {students.map(({ name, grade, attendance }) => (
          <li>
            {name}: {grade} {attendance}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Q7;
