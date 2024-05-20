// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import FilledCard from "./components/FilledCard";
import MainLayout from "./layouts/MainLayout";
import FilledLayout from "./layouts/FilledLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Landing />
            </MainLayout>
          }
        />
        <Route
          path="/cards"
          element={
            <FilledLayout>
              <FilledCard />
            </FilledLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
