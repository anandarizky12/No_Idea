import moment from "moment";
import "moment/locale/id";
import "./App.less";
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/Lazy/LoadingPage";
import { isMobile } from "react-device-detect";
import IsMobileBrowser from "./components/404/IsMobileBrowser";
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const ProtectedRoute = lazy(
  () => import("./components/protectedRoute/ProtectedRoute")
);
const Home = lazy(() => import("./components/Home"));
const Top = lazy(() => import("./components/Navigation/Top"));
const My404 = lazy(() => import("./components/404/Unauthorized"));
const Classroom = lazy(() => import("./components/Classroom/Classroom"));
const AllTask = lazy(() => import("./components/Task/AllTask"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const StudentsInClassroom = lazy(
  () => import("./components/Students/StudentsInClassroom")
);
const AnswerTask = lazy(() => import("./components/Task/AnswerTask"));
const Scores = lazy(() => import("./components/Scores/Scores"));
const AdminRoute = lazy(() => import("./Admin_Route/AdminRoute"));
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const AdminProfile = lazy(
  () => import("./components/admin/Profile/AdminProfile")
);
const Materi = lazy(() => import("./components/Materi/Materi"));
const BiodataStudent = lazy(
  () => import("./components/Classroom/BiodataStudent")
);
const ListScoreStudent = lazy(
  () => import("./components/Students/ListScoreStudent")
);
const AllScoresTask = lazy(() => import("./components/Scores/AllScoresTask"));
const ScoreDetail = lazy(() => import("./components/Scores/ScoreDetail"));
const EdtiScore = lazy(() => import("./components/Scores/EditScore"));
const ClassroomList = lazy(
  () => import("./components/Classroom/ClassroomList")
);
const AllQuestions = lazy(
  () => import("./components/AllQuestions/AllQuestions")
);

function App() {
  moment.locale("id");
  const location = useLocation();

  if (isMobile) {
    return <IsMobileBrowser />;
  }
  return (
    <div className="App h-screen ">
      <Suspense fallback={<LoadingPage />}>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          !location.pathname.includes("/admin") && <Top />}
        <Routes>
          <Route path="*" element={<My404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <AdminRoute
                redirectTo="/admin/login"
                Component={<AdminDashboard />}
              />
            }
          />
          <Route
            path="/admin/profile"
            element={
              <AdminRoute
                redirectTo="/admin/login"
                Component={<AdminProfile />}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute redirectTo="/login" Component={<Home />} />
            }
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
          <Route
            path="/classroom/:id/materi"
            element={
              <ProtectedRoute redirectTo="/login" Component={<Materi />} />
            }
          />
          <Route
            path="/classroom/:id/student/:user_id"
            element={
              <ProtectedRoute
                redirectTo="/login"
                Component={<BiodataStudent />}
              />
            }
          />
          <Route
            path="/your_score"
            element={
              <ProtectedRoute
                allowRole={"siswa"}
                redirectTo="/login"
                Component={<ListScoreStudent />}
              />
            }
          />
          <Route
            path="/classroom/:id/taskscore/:task_id"
            element={
              <ProtectedRoute
                allowRole={"guru"}
                redirectTo="/login"
                Component={<AllScoresTask />}
              />
            }
          />
          <Route
            path="/classroom/:id/getallquestions"
            element={
              <ProtectedRoute
                allowRole={"guru"}
                redirectTo="/login"
                Component={<AllQuestions />}
              />
            }
          />
          <Route
            path="/classroom/:id/scoredetail/:task_id/:user_id"
            element={
              <ProtectedRoute
                allowRole={"guru"}
                redirectTo="/login"
                Component={<ScoreDetail />}
              />
            }
          />
          <Route
            path="/classroom/:id/editscore/:task_id/:user_id"
            element={
              <ProtectedRoute
                allowRole={"guru"}
                redirectTo="/login"
                Component={<EdtiScore />}
              />
            }
          />
          <Route
            path="/classlist"
            element={
              <ProtectedRoute
                allowRole={"guru"}
                redirectTo="/login"
                Component={<ClassroomList />}
              />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
