import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search by Name or Reg number"
      className="w-64 p-2 border border-gray-300 rounded"
    />
  );
};

export default Search;
