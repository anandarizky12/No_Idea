import React from "react";
import CardMember from "./CardMember";
import { useDispatch, useSelector } from "react-redux";
import { getTaskInClassroom } from "../../actions/task";
import TaskCardHome from "../Task/TaskCardHome";
import { Spin } from "antd";

function Student({ classroom }: any) {
  const dispatch = useDispatch();
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const { task } = taskData;

  React.useEffect(() => {
    dispatch(getTaskInClassroom(classroom.data.id));
  }, [classroom.data.id, dispatch]);

  return (
    <div className="flex my-5 w-full flex-col md:flex-row md:w-3/4 ">
      <div className="hidden md:block">
        <CardMember />
      </div>
      <div className="w-full">
        {task ? (
          task.data.map((task: any, i: number) => (
            <TaskCardHome key={i} task={task} />
          ))
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
}

export default Student;
