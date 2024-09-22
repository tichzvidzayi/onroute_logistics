import React, { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DriverList from "./components/DriverList";
import Search from "./components/Search";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex">
      <SideMenu />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <DriverList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
