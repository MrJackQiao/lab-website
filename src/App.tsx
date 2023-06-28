import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Header from "./components/nav";
import PeopleList from "./components/peopleList";
import PublicationList from "./components/publicationsList";
import Openings from "./components/openings";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/x-lab/home" element={<Home />} />
        <Route path="/x-lab/people" element={<PeopleList />} />
        <Route path="/x-lab/publication" element={<PublicationList />} />
        <Route path="/x-lab/openings" element={<Openings />} />
      </Routes>
    </Router>
  );
}

export default App;
