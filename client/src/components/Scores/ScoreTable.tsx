import { Table, Tag, Space, Avatar, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAllScores } from "../../actions/task";
import { useParams } from "react-router-dom";

export default function ScoreTable() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { scores } = useSelector((state: any) => state.getAllScores);
  console.log(scores);
  React.useEffect(() => {
    dispatch(getAllScores(id));
  }, []);

  console.log(id);
  if (!scores) {
    return <div>Loading . . .</div>;
  }
  return (
    <table className="w-full">
      {scores.data.length < 1 && (
        <div className="text-center text-xl text-gray-500 ">
          Belum ada data nilai pada kelas ini
        </div>
      )}
      <thead>
        <tr>
          <th style={{ maxWidth: "30px" }} className="h-20 w-34"></th>
          {scores.data.map((task: any) => (
            <th className="border" style={{ maxWidth: "30px" }}>
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
        {scores.data.map((student: any) => (
          <tr className="text-center">
            <td className="border">
              <div className="flex items-center p-5">
                <Avatar src={student.Answer_task.User.profile} size="large" />
                <div className="ml-2">{student.Answer_task.User.name}</div>
              </div>
            </td>
            <td className="border text-xl text-gray-500">{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
