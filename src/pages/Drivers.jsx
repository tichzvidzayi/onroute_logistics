import React from 'react';
import DriverList from '../components/DriverList'; // Assuming DriverList is in components

const Drivers = () => {
  return (
    <div>
      <h1>Drivers Page</h1>
      <DriverList searchQuery="" />
    </div>
  );
};

export default Drivers;
