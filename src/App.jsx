import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import FilledCard from "./components/FilledCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cards" element={<FilledCard />} />
      </Routes>
    </Router>
  );
}

export default App;
