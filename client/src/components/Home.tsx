import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getClassroomByTeacherId,
  getStudentClassroom,
} from "../actions/classroom";
import { logout } from "../actions/user";
import Class_card from "./Card/Class_card";
import { Spin, Space } from "antd";
import DynamicError from "./404/DynamicError";
import StudentLayout from "./Students/StudentLayout";
import TeacherLayout from "./Teacher/TeacherLayout";

function Home() {
  const Dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const classes = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );
  const classesStudent = useSelector((state: any) => state.getStudentClassroom);
  const { student } = classesStudent;
  const { classroom } = classes;
  const Logout = () => {
    Dispatch(logout());
  };

  React.useEffect(() => {
    if (user.role === "guru") {
      Dispatch(getClassroomByTeacherId(user.id));
    }
    if (user.role === "siswa") {
      Dispatch(getStudentClassroom());
    }
  }, []);

  console.log(classesStudent);

  return (
    <div className="p-6 h-full">
      <div className="font-header  font-semibold text-gray-500">
        Daftar Kelas Anda
      </div>
      {user.role === "siswa" ? (
        <StudentLayout
          classes={classesStudent}
          classroom={student}
          Spin={Spin}
          Space={Space}
          Class_card={Class_card}
          DynamicError={DynamicError}
          user={user}
        />
      ) : (
        <TeacherLayout
          classes={classes}
          classroom={classroom}
          Spin={Spin}
          Space={Space}
          Class_card={Class_card}
          user={user}
          DynamicError={DynamicError}
        />
      )}
    </div>
  );
}

export default Home;
