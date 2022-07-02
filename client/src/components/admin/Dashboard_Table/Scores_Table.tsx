import React from "react";
import DataTable from "react-data-table-component";
import Export from "react-data-table-component";
import { customStyles } from "./Styles";
import { TableColumn } from "react-data-table-component";
import {
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";

import { useDispatch } from "react-redux";
import { deleteUser } from "../../../actions/user";
import { ReportScores } from "./ReportScores";

const { Search } = Input;

export default function Scores_Table({ data }: any) {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  console.log(rows);
  const filteredItems = rows.filter(
    (item: any) =>
      (item.User.name &&
        item.User.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.Classroom.name &&
        item.Classroom.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.Classroom.User.name &&
        item.Classroom.User.name
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (item.Task.title &&
        item.Task.title.toLowerCase().includes(filterText.toLowerCase()))
  );

  type DataRow = {
    name: string;
    email: string;
    phone: string;
    profile: string;
    role: string;
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
      name: "Kelas",
      selector: (row: any) => row.Classroom.name,
    },
    {
      name: "Nama Guru",
      selector: (row: any) => row.Classroom.User.name,
    },
    {
      name: "Nama Tugas",
      selector: (row: any) => row.Task.title,
      sortable: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Nilai",
      selector: (row: any) => row.score,
      sortable: true,
      style: {
        fontSize: "25px",
      },
    },
    {
      name: "Status",
      selector: (row: any) => conditionalScore(row.score),
      //   cell: (row: any) => (
      //     <div>
      //       <span
      //         className={`${row.role == "admin" && "bg-blue-500"} ${
      //           row.role == "siswa" && "bg-green-500"
      //         } ${
      //           row.role == "guru" && "bg-red-500"
      //         } p-2  text-xs text-white rounded-md `}
      //       >
      //         {row.role}
      //       </span>
      //     </div>
      //   ),
      sortable: true,
      style: {
        fontSize: "15px",
      },
    },
    // {
    //   name: "Aksi",
    //   cell: (row: any) => (
    //     <>
    //       <span
    //         onClick={() => handleButtonClick(row.id)}
    //         className="text-xl text-yellow-400 mr-4"
    //       >
    //         <EditOutlined />
    //       </span>
    //       {"     "}
    //       <span
    //         onClick={() => handleDelete(row.id)}
    //         className="text-xl text-red-600 mr-4"
    //       >
    //         <DeleteOutlined />
    //       </span>
    //     </>
    //   ),
    // },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <ReportScores filteredItems={filteredItems} />
        <Search
          placeholder="input search text"
          allowClear
          style={{ width: 304, marginLeft: "10px" }}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle, filteredItems]);

  console.log(data);
  React.useEffect(() => {
    if (data && data.data) {
      setLoading(false);
      setRows(data.data.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data]);

  return (
    <div className="w-full px-12 flex flex-col mt-7 items-center justify-center shadow-md">
      <div className="w-full border p-5 shadow-md">
        <DataTable
          title="Daftar Nilai Seluruh Siswa"
          columns={columns}
          data={filteredItems}
          pagination
          progressPending={loading}
          // subHeader
          actions={subHeaderComponentMemo}
          defaultSortFieldId={1}
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
        />

        <div className="w-full flex">
          <table className="border border-gray-300 mr-6">
            <tbody>
              <tr className="border border-gray-300">
                <th className="text-center font-semibold border border-gray-300 p-2">
                  Nilai
                </th>
                <th className="text-left font-semibold p-2">Keterangan</th>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-2">(89-100)</td>
                <td className="border border-gray-300 px-2">Sangat Baik</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-2">(70-89)</td>
                <td className="border border-gray-300 px-2">Baik</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-2">(60-70)</td>
                <td className="border border-gray-300 px-2">Cukup</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-2">(50-60)</td>
                <td className="border border-gray-300 px-2">Kurang</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-2">(0-50)</td>
                <td className="border border-gray-300 px-2">Sangat Kurang</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
