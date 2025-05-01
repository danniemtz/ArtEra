import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BrowsePage from "./pages/BrowsePage";
// import other pages as needed
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Optional: include your Header component here */}
        {/* <Header /> */}

        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<BrowsePage />} />
          <Route path="/browsepage" element={<BrowsePage />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* Optional: include your Footer component here */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
