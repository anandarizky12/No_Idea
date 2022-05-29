import React from "react";
import DataTable from "react-data-table-component";
import { customStyles, conditionalRowStyles, columns } from "./StylesTable";
import { Input } from "antd";

const { Search } = Input;

export default function ScoreTable({ scores, id }: any) {
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
    if (scores && scores.data) {
      setLoading(false);
      setRows(scores.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [scores, id]);

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
