import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DriverList from "./components/DriverList";
import Search from "./components/Search";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import About from "./pages/About";
import "./index.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar with navigation */}
        <SideMenu />

        {/* Main content */}
        <div className="flex-1">
          <Header />

          {/* Content container */}
          <div className="p-4">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/drivers"
                element={<Drivers searchQuery={searchQuery} />}
              />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
