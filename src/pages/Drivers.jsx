import React, { useState } from 'react';
import Search from '../components/Search';
import DriverList from '../components/DriverList';
import useDebounce from '../hooks/useDebounce';

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // 300ms delay

  return (
    <div>
      {/* Search and filter drivers */}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DriverList searchQuery={debouncedSearchQuery} />
    </div>
  );
};

export default Drivers;
