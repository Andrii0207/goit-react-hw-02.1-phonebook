const Filter = ({ title, onChange }) => {
  return (
    <div>
      {<h4>{title}</h4>}
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Filter;
