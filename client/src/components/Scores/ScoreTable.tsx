import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAllScores } from "../../actions/task";
import { useParams } from "react-router-dom";

import DynamicError from "../404/DynamicError";
import DataTable from "react-data-table-component";
import { customStyles, conditionalRowStyles, columns } from "./StylesTable";
import { Input } from "antd";

const { Search } = Input;

export default function ScoreTable() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { scores } = useSelector((state: any) => state.getAllScores);
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = rows.filter(
    (item: any) =>
      item.user && item.user.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <Search
        placeholder="input search text"
        allowClear
        style={{ width: 304 }}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText, resetPaginationToggle]);

  React.useEffect(() => {
    dispatch(getAllScores(id));
  }, []);

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
          data={filteredItems}
          pagination
          progressPending={loading}
          // subHeader
          actions={subHeaderComponentMemo}
          defaultSortFieldId={1}
          customStyles={customStyles}
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </div>
  );
}
