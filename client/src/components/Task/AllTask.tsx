import React from "react";
import { Button, Spin } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
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
      <div className=""></div>
      {user.role === "guru" ? (
        <Teacher open={open} setOpen={setOpen} classroom={classroom} />
      ) : null}

      <div className="w-4/5 mt-5">
        {!task && (
          <div className="flex h-96 items-center justify-center">
            <Spin size="large" />
          </div>
        )}
        {task && task.data.length > 0 ? (
          task.data.map((task: any, number: Number) => {
            return (
              <div className="flex items-center justify-center">
                <TaskCard key={number} task={task} user={user} />;
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
