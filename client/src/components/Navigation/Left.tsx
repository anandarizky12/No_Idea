import React from "react";
import { Drawer, Button, Radio, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
function Left({ setOpen, open }: any): JSX.Element {
  return (
    <div>
      <Drawer
        title="WeClass"
        placement={"left"}
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key={"left"}
      >
        <div className="px-1 pb-4 text- font-medium text-gray-500 flex items-center">
          <HomeOutlined className="text-xl mr-4" />
          Classroom
        </div>
        <div className="px-1 py-4 text- font-medium text-gray-500 flex items-center">
          <HomeOutlined className="text-xl mr-4" />
          Classroom
        </div>
        <div className="px-1 py-4 text- font-medium text-gray-500 flex items-center">
          <HomeOutlined className="text-xl mr-4" />
          Classroom
        </div>
      </Drawer>
    </div>
  );
}

export default Left;
