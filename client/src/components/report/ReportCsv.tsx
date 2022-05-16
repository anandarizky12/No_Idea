import React from "react";
import { CSVLink } from "react-csv";

export const ReportExcel = (dataSet: any) => {
  console.log(dataSet, "from medls[");
  return (
    <CSVLink className="bg-reg-400" data={dataSet.dataSet}>
      Download me
    </CSVLink>
  );
};
