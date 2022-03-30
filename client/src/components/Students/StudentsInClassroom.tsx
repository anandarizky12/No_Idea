import React from "react";
import StudentsCard from "./StudentsCard";
import { UserAddOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClassroom, getStudentsinClassroom } from "../../actions/classroom";
import { Avatar, Spin } from "antd";
import { getUser } from "../../actions/user";

function StudentsInClassroom() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const { students } = data;
  // const user = useSelector((state: any) => state.getUser);
  const classes = useSelector((state: any) => state.getClassroom);
  const { classroom } = classes;

  React.useEffect(() => {
    dispatch(getStudentsinClassroom(id));
    dispatch(getUser());
    dispatch(getClassroom(id));
  }, []);

  console.log(classes);
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-7/12 ">
        <div>
          <div className="border-b border-gray-600 px-5 flex justify-between">
            <h1 className="text-3xl font-normal">Anggota Kelas</h1>
            <div className="flex items-center justify-center ">
              <h4>
                {students ? students.data.length : <Spin size="small" />} Siswa
              </h4>
            </div>
          </div>
        </div>

        <div className="border w-full mt-5 rounded-md shadow-md h-16">
          <div className="flex items-center h-full px-5 justify-between">
            <div className="flex items-center">
              <Avatar
                size={"large"}
                src={"https://joeschmoe.io/api/v1/random"}
              />
              <div className="ml-5 font-medium">
                {" "}
                {classroom ? classroom.data.User.name : <Spin />}
              </div>
            </div>
            <div className="">Guru</div>
          </div>
        </div>
        {students && students.data ? (
          students.data.map((student: any) => (
            <StudentsCard student={student} />
          ))
        ) : (
          <div className="mt-12">
            <Spin className="w-full text-center" size="large" />
          </div>
        )}
        {students && students.data && students.data.length < 1 ? (
          <div className="text-center mt-5">
            <h1 className="text-3xl font-normal">Belum ada siswa</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default StudentsInClassroom;
