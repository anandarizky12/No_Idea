import React from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "./StylesTable";
import { Input } from "antd";
import moment from "moment";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { TableColumn } from "react-data-table-component";
const { Search } = Input;

interface Iprops {
  scores: any;
  id: string | undefined;
}

export default function ScoreTable({ scores, id }: Iprops) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState<string>("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState<boolean>(false);

  const filteredItems = rows.filter(
    (item: any) =>
      (item.user &&
        item.user.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.task_title &&
        item.task_title.toLowerCase().includes(filterText.toLowerCase()))
  );

  type DataRow = {
    task_title: string;
    score: string;
    user: string;
    date: string;
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
        fontSize: "15px",
      },
    },
    {
      name: "Tanggal Pengerjaan",
      selector: (row) => moment(row.date).format("MMMM Do YYYY, h:mm:ss a"),
      sortable: true,
    },
    {
      name: "Aksi",
      cell: (row: any) => (
        <button
          onClick={() =>
            navigate(
              `/classroom/${id}/scoredetail/${row.task_id}/${row.user_id}`
            )
          }
          className="bg-green-500 p-2 text-gray-200 rounded-md mr-4"
        >
          <EyeOutlined /> Lihat Detail
        </button>
      ),
    },
  ];

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

  console.log(rows);
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
        />
      </div>
    </div>
  );
}
