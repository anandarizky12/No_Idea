import { Avatar } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentsinClassroom } from "../../actions/classroom";
import { Spin } from "antd";

function Card_Member() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const { students } = data;
  React.useEffect(() => {
    dispatch(getStudentsinClassroom(id));
  }, []);

  console.log(students);

  return (
    <div className="border p-4 border-gray-300 w-48  rounded-md  flex flex-col justify-between">
      <h1 className="text-gray-500">Anggota Kelas</h1>

      {students && students.data.length > 1 ? (
        students.data.slice(0, 5).map((student: any) => (
          <div className="flex items-center border-b border-gray-300 p-2">
            <Avatar size={"small"} src={"https://joeschmoe.io/api/v1/random"} />
            <div className="ml-2 font-xs text-gray-500">
              {student.User.name.split(" ")[0]}
            </div>
          </div>
        ))
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}

export default Card_Member;
