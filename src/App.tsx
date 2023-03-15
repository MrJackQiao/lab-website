import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Header from "./components/nav";
import People from "./components/people";
import Publication from "./components/publications";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
    </Router>
  );
}

export default App;
