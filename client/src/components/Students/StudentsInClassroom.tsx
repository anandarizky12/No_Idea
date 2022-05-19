import React from "react";
import StudentsCard from "./StudentsCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClassroom, getStudentsinClassroom } from "../../actions/classroom";
import { Spin } from "antd";
import { getUser } from "../../actions/user";
import AvatarCustom from "../Avatar/AvatarCustom";

function StudentsInClassroom() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const { students } = data;
  const classes = useSelector((state: any) => state.getClassroom);
  const { classroom } = classes;

  React.useEffect(() => {
    dispatch(getStudentsinClassroom(id));
    dispatch(getUser());
    dispatch(getClassroom(id));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 md:px-12">
      <div className="w-full md:w-7/12 ">
        <div>
          <div className="border-b border-gray-400 px-0 md:px-5 flex justify-between">
            <h1 className="text-xl md:text-3xl font-normal text-gray-500">
              Anggota Kelas
            </h1>
            <div className="flex items-center justify-center ">
              <h4 className="font-bold text-gray-500">
                {students ? students.data.length : <Spin size="small" />} Siswa
              </h4>
            </div>
          </div>
        </div>
        {classroom ? (
          <div className="border w-full mt-5 rounded-md shadow-md h-16">
            <div className="flex items-center h-full px-5 justify-between">
              <div className="flex items-center">
                <AvatarCustom
                  src={classroom.data.User.profile}
                  size={"large"}
                />
                <div className="ml-5 font-medium">
                  {classroom.data.User.name}
                </div>
              </div>
              <div className="">Guru</div>
            </div>
          </div>
        ) : null}
        {students && students.data ? (
          students.data.map((student: any, index: any) => (
            <StudentsCard key={index} student={student} />
          ))
        ) : (
          <div className="mt-12">
            <Spin className="w-full text-center" size="large" />
          </div>
        )}
        {students && students.data && students.data.length < 1 ? (
          <div
            style={{ minHeight: "50vh" }}
            className=" flex items-center justify-center mt-5"
          >
            <h1 className="text-xl font-normal text-gray-500">
              Belum ada siswa
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default StudentsInClassroom;
