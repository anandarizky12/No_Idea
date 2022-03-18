import React from "react";
import { CopyOutlined } from "@ant-design/icons";

function Classcode() {
  return (
    <div className="border p-5 border-gray-300 w-48 h-24 rounded-md  flex justify-between">
      <div className="">
        <h1 className="text-md text-gray-600">Class Code</h1>
        <p className="text-2xl font-semibold">563dse</p>
      </div>
      <CopyOutlined className="text-xl" />
    </div>
  );
}

export default Classcode;
