import { Button, Spin } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import ButtonPrint from "../pdf/Button_PDF";
import TasksReport from "../pdf/TasksReport";
import React from "react";

function Teacher({ setOpen, open, classroom, task }: any) {
  const componentRef: any = React.useRef();

  const reportTasks = React.useMemo(() => {
    return (
      <div className="hidden">
        <div ref={componentRef}>
          <TasksReport task={task} name={classroom?.data?.name} />
        </div>
      </div>
    );
  }, [task, classroom]);

  return (
    <div className="flex flex-row items-center justify-between border-b-2 py-5 border-gray-200 w-4/6">
      <div className="">
        <Button
          icon={<PlusOutlined />}
          className="hover:cursor-pointer mr-2"
          onClick={() => setOpen(!open)}
        >
          Buat Tugas
        </Button>
        <ButtonPrint componentRef={componentRef} />
      </div>

      {classroom ? (
        <h1 className="text-gray-500 text-base font-normal">
          {classroom.data.name}
        </h1>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {reportTasks}
    </div>
  );
}

export default Teacher;
