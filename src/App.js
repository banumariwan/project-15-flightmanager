import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddFlight from "./pages/AddFlight";
import FlightList from "./pages/FlightList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/add-flight" element={<AddFlight />} />
      </Routes>
    </Router>
  );
}

export default App;
