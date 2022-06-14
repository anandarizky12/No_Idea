import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnfinishedTasks } from "../../actions/task";

import moment from "moment";
import { FormOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function Unfinished_Task() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const taskData = useSelector((state: any) => state.getUnfinishedTask);
  const user = useSelector((state: any) => state.user);

  React.useEffect(() => {
    dispatch(getUnfinishedTasks());
  }, [id]);
  console.log(taskData);
  return (
    <div className="border border-gray-200 w-80  rounded-md shadow-md">
      <div className="border-b border-gray-200 p-2">
        <h3 className="font-medium  px-2 p-0 m-0">
          Tugas Yang Belum Di Kerjakan <ExclamationOutlined />
        </h3>
      </div>

      <div className="">
        {taskData?.task?.data.map((task: any) => (
          <div
            onClick={() =>
              navigate(`/classroom/${task.classroom_id}/answertask/${task.id}`)
            }
            className="p-4 flex items-center border-b hover:cursor-pointer hover:bg-gray-200"
          >
            <Avatar icon={<FormOutlined />} />

            <div className="ml-4 ">
              <h1 className="text-xs p-0 m-0">{task.title.toUpperCase()}</h1>
              <p className="text-xs text-gray-500 p-0 m-0">
                {task.deadline
                  ? moment(task.deadline).calendar()
                  : "Tidak ada deadline"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}

export default Unfinished_Task;
