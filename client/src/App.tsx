import React from "react";
import "./App.less";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Home from "./components/Home";
import Top from "./components/Navigation/Top";
import My404 from "./components/404/My404";
import Classroom from "./components/Classroom/Classroom";
import { useLocation } from "react-router-dom";
import AllTask from "./components/Task/AllTask";
import moment from "moment";
import "moment/locale/id";
import Profile from "./components/Profile/Profile";
import StudentsInClassroom from "./components/Students/StudentsInClassroom";
import Report from "./components/report/Report";
import AnswerTask from "./components/Task/AnswerTask";

function App() {
  moment.locale("id");
  const location = useLocation();
  return (
    <div className="App h-screen ">
      {location.pathname != "/login" && location.pathname != "/register" && (
        <Top />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<My404 />} />

        <Route
          path="/"
          element={<ProtectedRoute redirectTo="/login" Component={<Home />} />}
        />
        <Route
          path="/classroom/:id"
          element={
            <ProtectedRoute redirectTo="/login" Component={<Classroom />} />
          }
        />
        <Route
          path="/classroom/:id/tasks"
          element={
            <ProtectedRoute redirectTo="/login" Component={<AllTask />} />
          }
        />
        <Route
          path="/classroom/:id/students"
          element={
            <ProtectedRoute
              redirectTo="/login"
              Component={<StudentsInClassroom />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute redirectTo="/login" Component={<Profile />} />
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute redirectTo="/login" Component={<Report />} />
          }
        />
        <Route
          path="classroom/:class_id/answertask/:id"
          element={
            <ProtectedRoute redirectTo="/login" Component={<AnswerTask />} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
