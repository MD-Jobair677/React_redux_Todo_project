


const Search = ({ searchTerm, onSearch  }) => {
  const handleSearchChange = (e) => {
    onSearch (e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search todos..."
      />
    </div>
  );
}
export default Search;