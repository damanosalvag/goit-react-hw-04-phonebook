const Filter = ({ filterValue, setFieldFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        title="Insert any name you want to search for."
        onChange={(e) => setFieldFilter(e.target.value)}
        value={filterValue}
      ></input>
    </div>
  );
};

export default Filter;
