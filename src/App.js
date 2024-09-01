import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import ItineraryPage from "./pages/ItineraryPage";
import MyTrips from "./pages/MyTrips";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/itinerary/:tripId" element={<ItineraryPage />} />
        <Route path="/mytrips" element={<MyTrips />} />
      </Routes>
    </Router>
  );
};

export default App;
