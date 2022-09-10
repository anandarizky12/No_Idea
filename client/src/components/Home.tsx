import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getClassroomByTeacherId,
  getStudentClassroom,
} from "../actions/classroom";
import { Spin, Space } from "antd";

const Classcard = lazy(() => import("./Card/Classcard"));
const DynamicError = lazy(() => import("./404/DynamicError"));
const StudentLayout = lazy(() => import("./Students/StudentLayout"));
const TeacherLayout = lazy(() => import("./Teacher/TeacherLayout"));

function Home() {
  const Dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const classes = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );
  const classesStudent = useSelector((state: any) => state.getStudentClassroom);
  const { student } = classesStudent;
  const { classroom } = classes;

  React.useEffect(() => {
    if (user.role === "guru") {
      Dispatch(getClassroomByTeacherId(user.id));
    }
    if (user.role === "siswa") {
      Dispatch(getStudentClassroom());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-6 h-full flex bg-gray-100">
      <div className="w-full">
        {/* <HomeBanner /> */}
        <div className="font-header font-semibold text-primary ml-1">
          Daftar Kelas Anda
        </div>
        <Suspense fallback={<Spin />}>
          {user.role === "siswa" ? (
            <StudentLayout
              classes={classesStudent}
              classroom={student}
              Spin={Spin}
              Space={Space}
              Classcard={Classcard}
              DynamicError={DynamicError}
              user={user}
            />
          ) : (
            <TeacherLayout
              classes={classes}
              classroom={classroom}
              Spin={Spin}
              Space={Space}
              Classcard={Classcard}
              user={user}
              DynamicError={DynamicError}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
