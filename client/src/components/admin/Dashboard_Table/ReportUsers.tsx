import { CSVLink, CSVDownload } from "react-csv";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";
import { Button } from "antd";

export const ReportExcel = ({ filteredItems }: any) => {
  console.log(filteredItems, "from medls[");
  return (
    <CSVLink
      style={{ display: "flex", alignItems: "center" }}
      data={filteredItems}
    >
      {" "}
      <Button color="secondary" icon={<DownloadOutlined />}>
        Report
      </Button>
    </CSVLink>
  );
};
