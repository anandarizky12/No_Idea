import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnfinishedTasks } from "../../actions/task";

import moment from "moment";
import {
  FormOutlined,
  CheckOutlined,
  ClockCircleFilled,
} from "@ant-design/icons";
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
    <div className="border border-gray-300 shadow-sm w-80  rounded-md bg-white">
      <div className="border-b border-gray-300 p-2">
        <h3 className="font-semibold text-primary  px-2 p-0 m-0">
          Tugas Yang Belum Dikerjakan
        </h3>
      </div>

      <div className="">
        {taskData?.task?.data.map((task: any, i: number) => (
          <div
            key={i}
            onClick={() =>
              navigate(`/classroom/${task.classroom_id}/answertask/${task.id}`)
            }
            className="p-4 flex items-center border-b hover:cursor-pointer cursor-pointer hover:bg-gray-300"
          >
            <Avatar style={{ background: "#3AB0FF" }} icon={<FormOutlined />} />

            <div className="ml-3">
              <h1 className="text-xs text-primary font-semibold p-0 m-0">
                {task.title.toUpperCase()}
              </h1>
              <p className="text-xs text-gray-400 p-0 m-0 mt-1">
                <ClockCircleFilled className="mr-2 text-xs" />
                {task.deadline
                  ? moment(task.deadline).format("MMM Do YY")
                  : "Tidak ada deadline"}
              </p>
            </div>
          </div>
        ))}
        {taskData?.task?.data.length === 0 && (
          <div className="text-gray-500 h-5/6 w-full flex items-center justify-center p-5">
            <CheckOutlined className="text-xl mr-2" /> Belum ada tugas yang
            belum dikerjakan
          </div>
        )}
      </div>
    </div>
  );
}

export default Unfinished_Task;
