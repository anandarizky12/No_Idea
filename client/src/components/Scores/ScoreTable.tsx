import { Table, Tag, Space, Avatar, Tooltip, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAllScores } from "../../actions/task";
import { useParams } from "react-router-dom";
import { getStudentsinClassroom } from "../../actions/classroom";
import DynamicError from "../404/DynamicError";

export default function ScoreTable() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { scores } = useSelector((state: any) => state.getAllScores);
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const { students } = data;
  // console.log(scores);

  React.useEffect(() => {
    dispatch(getAllScores(id));
    dispatch(getStudentsinClassroom(id));
  }, []);

  if (!data.isLoading && data.error) {
    return (
      <DynamicError
        message={data.error.data.error.message}
        status={data.error.status}
      />
    );
  }
  return (
    <div className="w-screen overflow-x-scroll">
      {/* {!data.isLoading && students && scores ? (
        <>
          {scores.data.length < 1 && (
            <div
              style={{ minHeight: "80vh" }}
              className="flex justify-center items-center text-xl text-gray-500 "
            >
              Belum ada data nilai pada kelas ini
            </div>
          )}
          <table width={"100%"} className="  ">
            <thead>
              <tr>
                <th className="h-20 min-w-96"></th>
                {scores.data.map((task: any) => (
                  <th key={task.id} className="border min-w-96">
                    <Tooltip
                      placement="bottom"
                      className="hover : cursor-pointer"
                      title={task.Task.title}
                    >
                      {task.Task.title.slice(0, 18) + " . . . "}
                    </Tooltip>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.data.map((student: any) => (
                <tr key={student.id} className="text-center">
                  <td className="border w-52">
                    <div className="flex items-center p-5 ">
                      <Avatar src={student.User.profile} size="large" />
                      <div className="ml-2">{student.User.name}</div>
                    </div>
                  </td>
                </tr>
              ))}
              {scores.data.map((student: any) => (
                <tr key={student.id} className="text-center">
                  <td className="border text-xl text-gray-500">
                    {student.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size={"large"} />
        </div>
      )} */}
    </div>
  );
}
