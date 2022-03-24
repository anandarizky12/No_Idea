import React from "react";
import { BookOutlined, MoreOutlined } from "@ant-design/icons";
import moment from "moment";
import PopupMenu from "./Popup";
function TaskCard({ task }: any) {
  return (
    <div className="flex flex-col  w-5/6 border rounded-md shadow-md border-b border-gray-300 mb-5">
      <div className=" h-12 w-full flex items-center p-8 justify-between">
        <div className="flex items-center">
          <BookOutlined className="text-xl mr-2 text-gray-500" />
          <h1 className="text-gray-500">{task.title} </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-gray-500 font-normal text-xs mr-2">
            Dibuat pada {moment(task.createdAt).format("MMM Do YY")}
          </h1>
          {/* <MoreOutlined className="text-xl text-gray-500 hover:cursor-pointer" /> */}
          <PopupMenu task={task} />
        </div>
      </div>
      <div className="border-t">
        <div className="flex items-center justify-between px-8 py-5">
          <div className="">
            <p className={`text-gray-500 font-normal text-xs`}>
              {task.deadline
                ? "Batas Waktu " + moment(task.deadline).format("MMM Do YY")
                : "Tidak Ada Batas Waktu"}
            </p>
            <p>{task.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
