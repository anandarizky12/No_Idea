import React from "react";
import { Avatar, Typography } from "antd";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Left from "./Left";

function Top(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="border-b h-16 border-gray-300 flex justify-between items-center p-6">
        <div className="flex items-center justify-center">
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="text-lg hover:cursor-pointer mr-5"
          />
          <div className="font-header text-xl font-bold text-gray-500">
            Weclass
          </div>
        </div>
        <div id="icons">
          <Tooltip placement="bottom" title="Buat Kelas">
            <PlusOutlined className="text-xl text-gray-400 hover:cursor-pointer" />
          </Tooltip>
          <Avatar size="large" src={"https://joeschmoe.io/api/v1/random"} />
        </div>
      </nav>
      <Left setOpen={setOpen} open={open} />
    </>
  );
}

export default Top;
