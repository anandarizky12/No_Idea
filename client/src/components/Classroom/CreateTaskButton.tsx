import React from "react";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import CreateTask from "../CreateandEdit_Task/CreateTask";
import AvatarCustom from "../Avatar/AvatarCustom";

function CreateTaskButton({ teacher }: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border ml-5 rounded-md shadow-md border-gray-300 w-6/6 h-16 flex items-center p-3">
      <AvatarCustom size={"large"} src={teacher.profile} />
      <div className="ml-5 flex items-center justify-between w-full">
        <h1 className="inline font-normal mt-2 text-gray-400">
          Buat Tugas Untuk Kelas Ini
        </h1>
        <div onClick={() => setOpen(!open)} className="">
          <PlusOutlined className="text-xl text-gray-400 hover:cursor-pointer mr-7" />
        </div>
      </div>
      <CreateTask setOpen={setOpen} open={open} />
    </div>
  );
}

export default CreateTaskButton;
