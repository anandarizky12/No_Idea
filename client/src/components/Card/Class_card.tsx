import React from "react";
import { Tooltip } from "antd";
import { UserOutlined, FundOutlined } from "@ant-design/icons";
import PopupMenu from "./PopupMenu";
import { useNavigate } from "react-router-dom";

function Class_card({ classroom, id }: any) {
  const navigate = useNavigate();
  return (
    <div className="hover:shadow-lg  my-5 mr-6 rounded-xl  min-w-11 h-72 border border-gray-300 overflow-hidden flex flex-col justify-between">
      <div className="border-b flex justify-between  border-gray-300 bg-hero bg-cover bg-center w-full h-24 p-5 ">
        <h1
          onClick={() => {
            navigate(`classroom/${id}`);
          }}
          className="text-white font-normal text-xl  hover:cursor-pointer hover:underline"
        >
          {classroom.name}
        </h1>
        <div className="text-white font-bold">
          <PopupMenu />
        </div>
      </div>
      <div className="border-t   border-gray-300 w-full h-12">
        <div className="flex justify-end items-center h-full p-3">
          <Tooltip placement="bottom" title="Nilai Siswa">
            <FundOutlined className="text-xl mr-4 hover:cursor-pointer" />
          </Tooltip>
          <Tooltip placement="bottom" title="Anggota Kelas">
            <UserOutlined className="text-xl  hover:cursor-pointer" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Class_card;
