import React from "react";
import { Avatar } from "antd";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Left from "./Left";
import Create from "../Create_Classroom/Create";

function Top(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  return (
    <>
      <nav className="border-b h-16 border-gray-300 flex justify-between items-center p-6">
        <div className="flex items-center justify-center">
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="text-lg hover:cursor-pointer mr-5"
          />
          <div className="font-header text-xl font-bold text-gray-500">
            Weclass&nbsp;
            {/* <span className="mr-1 text-yellow-500">S</span>
            <span className="mr-1 text-red-400">t</span>
            <span className="mr-1 text-green-500">a</span>
            <span className="mr-1 text-blue-500">r</span>
            <span className="mr-1 text-purple-500">k</span> */}
          </div>
        </div>
        <div id="icons">
          <Tooltip placement="bottom" title="Buat Kelas">
            <PlusOutlined
              onClick={() => setOpenRight(true)}
              className="text-xl text-gray-400 hover:cursor-pointer mr-7"
            />
          </Tooltip>
          <Avatar size="large" src={"https://joeschmoe.io/api/v1/random"} />
        </div>
      </nav>
      <Left setOpen={setOpen} open={open} />
      <Create setOpenRight={setOpenRight} openRight={openRight} />
    </>
  );
}

export default Top;
