import React from "react";
import { Drawer } from "antd";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../../utils/utils";
import ClassroomList from "./ClassroomList";
import {
  getClassroomByTeacherId,
  getStudentClassroom,
} from "../../actions/classroom";

function Left({ setOpen, open }: any): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = getCookie("id");
  const classes = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );
  const classesStudent = useSelector((state: any) => state.getStudentClassroom);
  const { student } = classesStudent;
  const user = useSelector((state: any) => state.user);
  const { classroom } = classes;

  function handleNavigate(path: string) {
    navigate(path);
    setOpen(false);
  }

  React.useEffect(() => {
    if (user.role === "guru") {
      dispatch(getClassroomByTeacherId(id));
    }
    if (user.role === "siswa") {
      dispatch(getStudentClassroom());
    }
  }, []);

  return (
    <div>
      <Drawer
        title="WeClass"
        placement={"left"}
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key={"left"}
        width={300}
      >
        <div
          onClick={() => handleNavigate("/")}
          className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md 
           hover:text-blue-300 
          hover:cursor-pointer"
        >
          <HomeOutlined className="text-2xl mr-6" />
          Home Page
        </div>

        {user.role === "guru" ? (
          <div
            onClick={() => handleNavigate("/report")}
            className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md 
           hover:text-blue-300 
          hover:cursor-pointer"
          >
            <FileTextOutlined className="text-2xl mr-6" />
            Report Page
          </div>
        ) : null}
        <div className="border-b"></div>
        <div className="px-1 py-4 text- font-semibold text-gray-500 flex items-center">
          Classroom
        </div>
        {user.role === "guru" ? (
          <>
            {classroom &&
              classroom.class.map((item: any) => (
                <ClassroomList
                  navigate={handleNavigate}
                  key={item.id}
                  classroom={item}
                />
              ))}
          </>
        ) : (
          <>
            {student &&
              student.class.map((item: any) => (
                <ClassroomList
                  navigate={handleNavigate}
                  key={item.id}
                  classroom={item.Classroom}
                />
              ))}
          </>
        )}
        <div className="border-b"></div>
      </Drawer>
    </div>
  );
}

export default Left;
