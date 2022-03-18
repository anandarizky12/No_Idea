import React from "react";
import { Avatar } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
function CreateTaskButton() {
  return (
    <div className="border ml-5 rounded-md shadow-md border-gray-300 w-6/6 h-16 flex items-center p-3">
      <Avatar size="large" src={"https://joeschmoe.io/api/v1/random"} />
      <div className="ml-5 flex items-center justify-between w-full">
        <h1 className="inline font-normal mt-2 text-gray-400">
          Buat Tugas Untuk Kelas Ini
        </h1>
        <div className="">
          <PlusOutlined className="text-xl text-gray-400 hover:cursor-pointer mr-7" />
        </div>
      </div>
    </div>
  );
}

export default CreateTaskButton;
