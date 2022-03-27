import { Avatar, Space } from "antd";
import React from "react";

function StudentsCard({ student }: any) {
  return (
    <div className="border w-full mt-5 rounded-md shadow-md h-16">
      <div className="flex items-center h-full px-5 justify-between">
        <div className="flex items-center">
          <Avatar size={"large"} src={"https://joeschmoe.io/api/v1/random"} />
          <div className="ml-5 font-medium">{student.User.name}</div>
        </div>
        <div className="">Students</div>
      </div>
    </div>
  );
}

export default StudentsCard;
