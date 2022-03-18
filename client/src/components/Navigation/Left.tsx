import React from "react";
import { Drawer, Button, Radio, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Left({ setOpen, open }: any): JSX.Element {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
    setOpen(false);
  }
  return (
    <div>
      <Drawer
        title="WeClass"
        placement={"left"}
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key={"left"}
        width={300}
      >
        <div
          onClick={() => handleNavigate("/")}
          className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md 
           hover:text-blue-300 
          hover:cursor-pointer"
        >
          <HomeOutlined className="text-xl mr-4" />
          Home Page
        </div>
        <div className="border-b"></div>
        <div className="px-1 py-4 text- font-semibold text-gray-500 flex items-center">
          Classroom
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Nama Kelas
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Nama Kelas
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Nama Kelas
        </div>
        <div className="border-b"></div>
        <div className="px-1 py-4 text- font-semibold text-gray-500 flex items-center">
          Deadline Tugas
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data Siswa
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data Guru
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Biodata Siswa
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data NilaI
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data NilaI
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data NilaI
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data NilaI
        </div>
        <div className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-centerflex-row rounded-md">
          <HomeOutlined className="text-xl mr-4" />
          Data NilaI
        </div>
      </Drawer>
    </div>
  );
}

export default Left;
