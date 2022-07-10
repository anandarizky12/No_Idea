import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinishedTasks } from "../../actions/task";
import { useParams } from "react-router-dom";

function Finished_Task() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const taskData = useSelector((state: any) => state.getFinishedTask);
  const user = useSelector((state: any) => state.user);

  React.useEffect(() => {
    dispatch(getFinishedTasks());
  }, [id]);
  console.log(taskData);
  return (
    <div className="border border-gray-200 w-80  rounded-md">
      <div className="border-b border-gray-200 p-2">
        <h3 className="font-semibold">Tugas Yang Sudah Di Kerjakan</h3>
      </div>

      <div className="">
        {taskData?.task?.data.map((task: any) => (
          <h1>{task.Task.title}</h1>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}

export default Finished_Task;
