import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function AllTask() {
  return (
    <div className="flex flex-col items-center ">
      <div className=""></div>
      <Button
        type="primary"
        icon={<PlusOutlined className="pb-2" />}
        className="hover:cursor-pointer"
      >
        Buat Tugas
      </Button>
    </div>
  );
}

export default AllTask;
