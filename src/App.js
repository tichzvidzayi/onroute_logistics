import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import About from "./pages/About";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
