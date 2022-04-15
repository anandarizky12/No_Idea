import { Table, Tag, Space } from "antd";
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
    return <div>Loading</div>;
  }
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th style={{ width: "50px" }} className="h-20">
            Name
          </th>

          {scores.data.map((task: any) => (
            <th style={{ width: "10px" }}>{task.Task.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {scores.data.map((student: any) => (
          <tr>
            <td>{student.Answer_task.User.name}</td>
            <td>{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
