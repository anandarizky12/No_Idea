import React from "react";
import { ReconciliationOutlined } from "@ant-design/icons";
import moment from "moment";

function TaskCardHome({ task }: any) {
  return (
    <div className="flex justify-between border p-5 ml-4 mb-4 border-gray-300">
      <div className="flex items-center">
        <ReconciliationOutlined className="text-gray-300 text-3xl mr-3" />
        <div>{task.title}</div>
      </div>
      <h2 className="text-xs text-gray-500">
        {moment(task.createdAt).format("LLLL")}
      </h2>
    </div>
  );
}

export default TaskCardHome;
