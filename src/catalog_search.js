import "./css/catalog_search.css";

const SearchInput = (func, value) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    func(value);
  };

  return (
    <div>
      <input
        id="search_input"
        className="search_input"
        type="text"
        value={value}
        placeholder="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;