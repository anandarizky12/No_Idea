import React from "react";
import Card_Member from "./Card_Member";
import { useDispatch, useSelector } from "react-redux";
import { getTaskInClassroom } from "../../actions/task";
import TaskCardHome from "../Task/TaskCardHome";

function Student({ classroom }: any) {
  const dispatch = useDispatch();
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const { task } = taskData;

  React.useEffect(() => {
    dispatch(getTaskInClassroom(classroom.data.id));
  }, []);

  console.log(taskData);
  return (
    <div className="flex my-5 w-3/4 ">
      {/* left team */}
      <div className="">
        <Card_Member />
      </div>
      {/* right team */}
      <div className="w-full ">
        {task && task.data.map((task: any) => <TaskCardHome task={task} />)}
      </div>
    </div>
  );
}

export default Student;
