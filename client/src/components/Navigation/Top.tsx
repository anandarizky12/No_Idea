import React from "react";
import { Avatar } from "antd";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Left from "./Left";
import Create from "../Create_Classroom/Create";
import { useLocation, useNavigate } from "react-router-dom";

function Top(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  return (
    <>
      <nav className="border-b h-16 border-gray-300 flex justify-between items-center px-6">
        <div className="flex items-center justify-center">
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="text-lg hover:cursor-pointer mr-5"
          />
          <div className="font-header text-xl font-bold text-gray-500">
            Weclass&nbsp;
          </div>
        </div>
        {location.pathname.includes("classroom") ? (
          <div className="flex w-80 h-full items-end justify-between">
            <div
              onClick={() => navigate(`/classroom/${id}`)}
              className=" font-medium text-gray-500 text-base hover:cursor-pointer hover:text-blue-500 border-b-4 rounded-sm h-4/6 w-14 flex justify-center  border-gray-500 "
            >
              Kelas
            </div>
            <div
              onClick={() => navigate(`/classroom/${id}/tasks`)}
              className=" font-medium text-gray-500 text-base hover:cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center"
            >
              Tugas
            </div>
            <div
              onClick={() => navigate(`/classroom/${id}/students`)}
              className=" font-medium text-gray-500 text-base hover:cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center"
            >
              Anggota{" "}
            </div>
            <div
              onClick={() => navigate(`/classroom/${id}/scores`)}
              className=" font-medium text-gray-500 text-base hover:cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center"
            >
              Nilai
            </div>
          </div>
        ) : null}

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
