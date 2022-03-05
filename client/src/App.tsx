import React from "react";
import "./App.less";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={<ProtectedRoute redirectTo="/login" Component={<Home />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
