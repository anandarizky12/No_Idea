import React from "react";
import { BookOutlined, MoreOutlined } from "@ant-design/icons";

function TaskCard({ task }: any) {
  return (
    <div className="flex w-full border rounded-md shadow-md border-b border-gray-300 mb-5">
      <div className=" h-12 w-full flex items-center p-8 justify-between">
        <div className="flex">
          <BookOutlined className="text-xl mr-2 text-gray-500" />
          <h1 className="text-gray-500">Nama Tugas </h1>
        </div>
        <div className="flex">
          <h1 className="text-gray-500 font-normal text-xs">
            Dibuat pada 08/12/4000{" "}
          </h1>
          <MoreOutlined className="text-xl text-gray-500 hover:cursor-pointer" />
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default TaskCard;
