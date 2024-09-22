const Search = ({ searchQuery, setSearchQuery }) => (
    <input
      type="text"
      className="border p-2 w-full"
      placeholder="Search for Driver"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
  
  export default Search;
  