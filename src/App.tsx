import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Header from "./components/nav";
import PeopleList from "./components/people";
import Publication from "./components/publications";
import Openings from "./components/openings";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/openings" element={<Openings />} />
      </Routes>
    </Router>
  );
}

export default App;
