const Filter = ({ filterValue, setFieldFilter }) => {
  return (
    <div className="display">
      <h3 className="subtitle">Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        title="Insert any name you want to search for."
        onChange={(e) => setFieldFilter(e.target.value)}
        value={filterValue}
        className="filter-field"
      ></input>
    </div>
  );
};

export default Filter;
