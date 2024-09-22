import React, { useState } from 'react';
import Search from '../components/Search';
import DriverList from '../components/DriverList';
import useDebounce from '../hooks/useDebounce';

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // Add 300ms delay, to debounce the search query

  return (
    <div>
      {/* Search and filter drivers using name or their reg number */}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DriverList searchQuery={debouncedSearchQuery} />
    </div>
  );
};

export default Drivers;
