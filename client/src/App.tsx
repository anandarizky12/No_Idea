import React from "react";
import "./App.less";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1> HOME </h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
