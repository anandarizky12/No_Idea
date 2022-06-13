import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskInClassroom } from "../../actions/task";
import { useParams } from "react-router-dom";

function Finished_Task() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const user = useSelector((state: any) => state.user);
  const { task } = taskData;

  React.useEffect(() => {
    dispatch(getTaskInClassroom(id));
  }, [id]);
  console.log(task);
  return (
    <div className="border border-gray-200 w-80  rounded-md">
      <div className="border-b border-gray-200 p-2">
        <h3 className="font-semibold">Tugas Yang Belum Di Kerjakan</h3>
      </div>

      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default Finished_Task;
