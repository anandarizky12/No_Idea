import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAllScores } from "../../actions/task";
import { useParams } from "react-router-dom";

import DynamicError from "../404/DynamicError";
import DataTable, { TableColumn } from "react-data-table-component";
import { customStyles, conditionalRowStyles } from "./StylesTable";

export default function ScoreTable() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { scores } = useSelector((state: any) => state.getAllScores);
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    dispatch(getAllScores(id));
  }, []);

  type DataRow = {
    task_title: string;
    score: string;
    user: string;
  };
  const columns: TableColumn<DataRow>[] = [
    {
      name: "Nama Siswa",
      selector: (row) => row.user,
      sortable: true,
    },
    {
      name: "Nama Tugas",
      selector: (row) => row.task_title,
    },
    {
      name: "Nilai",
      selector: (row) => row.score,
      sortable: true,
      style: {
        fontSize: "17px",
      },
    },
  ];

  React.useEffect(() => {
    if (scores && scores.data) {
      setLoading(false);
      setRows(scores.data);
    }
  }, [scores]);

  if (!data.isLoading && data.error) {
    return (
      <DynamicError
        message={data.error.data.error.message}
        status={data.error.status}
      />
    );
  }
  return (
    <div className="w-full flex flex-col mt-12 items-center justify-center">
      <div className="w-4/6 border p-5 shadow-md">
        <DataTable
          title="Daftar Nilai Siswa"
          columns={columns}
          data={rows}
          pagination
          progressPending={loading}
          defaultSortFieldId={1}
          customStyles={customStyles}
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </div>
  );
}
