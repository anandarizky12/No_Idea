import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";
import ButtonPrint from "../pdf/Button_PDF";
import YourScore from "../pdf/YourScore";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export default function AllScoreTaskTable({ data, id }: any) {
  console.log(data.task?.data);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState<any>([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const componentRef: any = React.useRef();
  const filteredItems = rows.filter(
    (item: any) =>
      (item.User.name &&
        item.User.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.User.email &&
        item.User.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.score && item.score == filterText.toLowerCase())
  );

  type DataRow = {
    name: string;
    email: string;
    score: string;
    date: string;
  };

  const conditionalScore = (score: number) => {
    if (score >= 89) {
      return "Sangat Baik";
    } else if (score >= 70) {
      return "Baik";
    } else if (score >= 60) {
      return "Cukup";
    } else if (score >= 50) {
      return "Kurang";
    } else {
      return "Sangat Kurang";
    }
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Nama Siswa",
      selector: (row: any) => row.User.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.User.email,
      sortable: true,
    },
    {
      name: "Nilai",
      style: { fontSize: 30 },
      selector: (row: any) => row.score,
    },
    {
      name: "Tanggal Pengerjaan",
      selector: (row: any) =>
        moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    },

    {
      name: "Status",
      cell: (row: any) => <p>{conditionalScore(row.score)}</p>,
    },
    {
      name: "Aksi",
      cell: (row: any) => (
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 p-2 text-gray-200 rounded-md mr-4"
        >
          <EyeOutlined /> Lihat Detail
        </button>
      ),
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <ButtonPrint componentRef={componentRef} />
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
    if (data && data?.task) {
      setLoading(false);
      setRows(data.task?.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data, id]);

  console.log(rows);
  return (
    <div className="w-full h-full px-12 flex flex-col mt-12 items-center justify-center ">
      <div className="w-5/6 border p-5 shadow-md">
        <DataTable
          title={`Daftar Nilai Siswa Di Kelas '${rows[0]?.Task.title.toUpperCase()}'`}
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
      {/* <div className="hidden">
        <div ref={componentRef}>
          <YourScore data={filteredItems} />
        </div>
      </div> */}
    </div>
  );
}
