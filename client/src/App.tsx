import "./App.less";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Home from "./components/Home";
import Top from "./components/Navigation/Top";
import My404 from "./components/404/Unauthorized";
import Classroom from "./components/Classroom/Classroom";
import AllTask from "./components/Task/AllTask";
import Profile from "./components/Profile/Profile";
import StudentsInClassroom from "./components/Students/StudentsInClassroom";
import Report from "./components/report/Report";
import AnswerTask from "./components/Task/AnswerTask";
import Scores from "./components/Scores/Scores";
import moment from "moment";
import "moment/locale/id";
import AdminRoute from "./Admin_Route/AdminRoute";
import Admin_Login from "./components/admin/Admin_Login";

function App() {
  moment.locale("id");
  const location = useLocation();
  return (
    <div className="App h-screen ">
      {location.pathname != "/login" &&
        location.pathname != "/register" &&
        location.pathname != "/admin" && <Top />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<Admin_Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<My404 />} />

        <Route
          path="/admin"
          element={
            <AdminRoute redirectTo="/admin/login" Component={<Home />} />
          }
        />

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
            <ProtectedRoute
              allowRole={"guru"}
              redirectTo="/login"
              Component={<Report />}
            />
          }
        />
        <Route
          path="classroom/:class_id/answertask/:id"
          element={
            <ProtectedRoute
              allowRole={"siswa"}
              redirectTo="/login"
              Component={<AnswerTask />}
            />
          }
        />
        <Route
          path="/classroom/:id/scores"
          element={
            <ProtectedRoute
              allowRole={"guru"}
              redirectTo="/login"
              Component={<Scores />}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
