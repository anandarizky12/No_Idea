import React from "react";
import { Drawer } from "antd";
import { HomeOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
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
        title="SMKN 1 Sukamara"
        placement={"left"}
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key={"left"}
        width={260}
        extra={
          <div>
            <div className="logo">
              <img src="/logo.png" width={40} alt="logo" />
            </div>
          </div>
        }
        headerStyle={{
          background: "#fff",
          fontWeight: "bold",
        }}
        footer={
          <div className="text-center">
            <h1 className="text-primary">
              © {new Date().getFullYear()} SMKN 1 SUKAMARA
            </h1>
          </div>
        }
        bodyStyle={{
          paddingLeft: 20,
          paddingRight: 10,
          paddingTop: 0,

          // borderTop: 1 + "px solid #2525",
        }}
      >
        <ul>
          <li
            onClick={() => handleNavigate("/")}
            className="px-2 left-0 py-4 font-normal text-primary flex items-center flex-row
           hover:text-blue-300 cursor-pointer"
          >
            <HomeOutlined className="text-xl mr-6" />
            Home Page
          </li>
          <li
            onClick={() => handleNavigate("/profile")}
            className="px-2 left-0 py-4 font-normal text-primary flex items-center flex-row
           hover:text-blue-300 cursor-pointer"
          >
            <UserOutlined className="text-xl mr-6" />
            Profile Page
          </li>
          {user.role == "siswa" ? (
            <li
              onClick={() => handleNavigate("/your_score")}
              className="px-2 left-0 py-4 font-normal text-primary flex items-center flex-row
           hover:text-blue-300 cursor-pointer"
            >
              <ProfileOutlined className="text-xl mr-6" />
              Daftar nilai anda
            </li>
          ) : null}
          {/* {user.role === "guru" ? (
            <li
              onClick={() => handleNavigate("/report")}
              className="px-2 left-0 py-4 font-normal text-primary flex items-centerflex-row rounded-md 
           hover:text-blue-300 cursor-pointer"
            >
              <FileTextOutlined className="text-xl mr-6" />
              Report Page
            </li>
          ) : null} */}
          <div className="border-b"></div>
          <li className=" py-4 text- font-semibold text-primary flex items-center">
            Kelas yang diikuti
          </li>
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
          <div className="border-b "></div>
        </ul>
      </Drawer>
    </div>
  );
}

export default Left;
