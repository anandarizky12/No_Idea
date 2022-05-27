import React from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getClassroom } from "../../actions/classroom";
import { useParams } from "react-router-dom";
import { getTaskInClassroom } from "../../actions/task";
import TaskCard from "./TaskCard";
import CreateTask from "../CreateandEdit_Task/CreateTask";
import Teacher from "./Teacher";

function AllTask() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { classroom } = useSelector((state: any) => state.getClassroom);
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const user = useSelector((state: any) => state.user);
  const { task } = taskData;

  React.useEffect(() => {
    dispatch(getClassroom(id));
    dispatch(getTaskInClassroom(id));
  }, [id]);

  return (
    <div className="flex flex-col items-center ">
      <div className="w-4/6 mt-7">
        <div className="border-b border-gray-400 px-0 md:px-0 flex justify-between">
          <h1 className="text-xl md:text-3xl font-normal text-gray-500">
            Daftar Tugas Kelas
          </h1>
          <div className="flex items-center justify-center text-gray-500 font-bold">
            Total {task ? task.data.length : <Spin size="small" />} Tugas
          </div>
        </div>
      </div>
      {user.role === "guru" ? (
        <Teacher open={open} setOpen={setOpen} classroom={classroom} />
      ) : null}

      <div className="w-full md:5/6  mt-5 md:mt-8 flex flex-col items-center justify-center">
        {!task && (
          <div className="flex h-96 items-center justify-center">
            <Spin size="large" />
          </div>
        )}
        {task && task.data.length > 0 ? (
          task.data.map((task: any, number: Number) => {
            return (
              <div
                key={task.id}
                className="flex p-4 md:p-0 md:w-4/6 items-center justify-center"
              >
                <TaskCard task={task} user={user} />
              </div>
            );
          })
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
            <h1 className="text-gray-500 font-normal text-base">
              Kelas ini belum memiliki tugas
            </h1>
          </div>
        )}
      </div>
      <CreateTask setOpen={setOpen} open={open} />
    </div>
  );
}

export default AllTask;
