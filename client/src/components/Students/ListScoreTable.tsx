import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { Avatar, Button, Input } from "antd";
import { useDispatch } from "react-redux";

const { Search } = Input;

export default function ListScoreTable({ data, id }: any) {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = rows.filter(
    (item: any) =>
      (item.Classroom.name &&
        item.Classroom.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.Task.title &&
        item.Task.title.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.score && item.score == filterText.toLowerCase())
  );

  type DataRow = {
    name: string;
    email: string;
    phone: string;
    profile: string;
    role: string;
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Nama Tugas",
      selector: (row: any) => row.Task.title,
      sortable: true,
    },
    {
      name: "Keterangan",
      selector: (row: any) => row.Task.description,
      sortable: true,
    },
    {
      name: "Kelas",
      selector: (row: any) => row.Classroom.name,
    },
    {
      name: "Nilai",
      selector: (row: any) => row.score,
    },
    {
      name: "Tanggal",
      selector: (row: any) => row.createdAt,
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <Search
          placeholder="input search text"
          allowClear
          style={{ width: 304, marginLeft: "10px" }}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle, filteredItems]);

  React.useEffect(() => {
    if (data && data.data) {
      setLoading(false);
      setRows(data.data.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data, id]);

  console.log(rows, data);

  return (
    <div className="w-full px-12 flex flex-col mt-12 items-center justify-center shadow-md">
      <div className="w-full border p-5 shadow-md">
        <DataTable
          title="Daftar Nilai Anda"
          columns={columns}
          data={filteredItems}
          pagination
          progressPending={loading}
          // subHeader
          actions={subHeaderComponentMemo}
          defaultSortFieldId={1}
          //   customStyles={customStyles}
          highlightOnHover
          pointerOnHover
        />
      </div>
    </div>
  );
}
