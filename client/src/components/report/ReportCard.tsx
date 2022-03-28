import { Avatar } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
function ReportCard({ report }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/report/${report.path}`)}
      className="w-72 border shadow-md p-5 rounded-md m-1 hover:cursor-pointer hover:shadow-xl"
    >
      <Avatar size={72} />
      <h1 className="text-gray-400 font-light mt-5">{report.title2}</h1>
      <h1 className="font-bold text-xl">{report.title}</h1>
      <p className="text-gray-500 font-light text-xs">{report.description}</p>
    </div>
  );
}

export default ReportCard;
