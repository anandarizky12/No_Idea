import { Avatar } from "antd";
import React from "react";
import { BarChartOutlined } from "@ant-design/icons";

function ReportCard({ setReport, report, setVisible, type }: any) {
  const handleClick = () => {
    setReport(report);
    setVisible(true);
  };

  // console.log(report.icon);

  return (
    <div
      onClick={handleClick}
      className="w-72 border shadow-md p-5 rounded-md m-1 hover:cursor-pointer hover:shadow-xl"
    >
      <Avatar icon={report.icon} size={72} />
      <h1 className="text-gray-400 font-light mt-5">{report.title2}</h1>
      <h1 className="font-bold text-xl">{report.title}</h1>
      <p className="text-gray-500 font-light text-xs">{report.description}</p>
    </div>
  );
}

export default ReportCard;
