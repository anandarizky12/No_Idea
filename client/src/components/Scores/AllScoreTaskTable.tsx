import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { Input } from "antd";

import moment from "moment";
import ButtonPrint from "../pdf/Button_PDF";

import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import StudentScorePertask from "../pdf/StudentScorePertask";
import { conditionalScore } from "../../utils/utils";

const { Search } = Input;

export default function AllScoreTaskTable({ data, class_id, task_id }: any) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  const [rows, setRows] = React.useState<any>([]);
  const [filterText, setFilterText] = React.useState("");
  const [arrayScore, setArrayScore] = React.useState<any>([]);

  const componentRef: any = React.useRef();
  const filteredItems = rows.filter(
    (item: any) =>
      (item.User.name &&
        item.User.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.User.email &&
        item.User.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.score && item.score === filterText.toLowerCase())
  );

  const average = (array: Array<number>) =>
    array.reduce((a: number, b: number) => a + b) / array.length;

  type DataRow = {
    name: string;
    email: string;
    score: string;
    date: string;
  };

  const getArrayScore = (array: Array<any>) => {
    let arr: any = [];
    array.map((row: any) => {
      return arr.push(row.score);
    });

    return setArrayScore(arr);
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
      width: "7rem",
    },
    {
      name: "Tanggal Pengerjaan",
      selector: (row: any) =>
        moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    },

    {
      name: "Status",
      cell: (row: any) => <p>{conditionalScore(row.score)}</p>,
      width: "8rem",
    },
    {
      name: "Aksi",
      cell: (row: any) => (
        <>
          <button
            onClick={() =>
              navigate(
                `/classroom/${class_id}/scoredetail/${task_id}/${row.User.id}`
              )
            }
            className="bg-green-500 p-2 text-gray-200 rounded-md mr-4"
          >
            <EyeOutlined />
            Detail
          </button>
          <button
            onClick={() =>
              navigate(
                `/classroom/${class_id}/editscore/${row.task_id}/${row.User.id}`
              )
            }
            className="bg-yellow-500 p-2 text-gray-200 rounded-md mr-4"
          >
            <EditOutlined />
            Edit
          </button>
        </>
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
    // eslint-disable-next-line
  }, [filterText, filteredItems]);

  const subHeader = React.useMemo(() => {
    return (
      <div className="flex mb-7 mt-4">
        <table>
          <tbody>
            <tr>
              <th className="text-left font-semibold">Nilai Tertinggi</th>
              <td>
                : {arrayScore.length >= 1 ? Math.max(...arrayScore) : "-"}
              </td>
              <th className="text-left font-semibold pl-12">Rata-Rata Nilai</th>
              <td>: {arrayScore.length >= 1 ? average(arrayScore) : "-"}</td>
            </tr>
            <tr>
              <th className="text-left font-semibold">Nilai Terendah</th>
              <td>
                : {arrayScore.length >= 1 ? Math.min(...arrayScore) : "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    // eslint-disable-next-line
  }, [arrayScore]);

  React.useEffect(() => {
    if (data && data?.task) {
      setLoading(false);

      setRows(data.task?.data);
      getArrayScore(data?.task?.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data, task_id]);

  return (
    <div className="w-full h-full px-12 flex flex-col mt-12 items-center justify-center ">
      <div className="w-5/6 border p-5 shadow-md">
        <DataTable
          title={`Daftar Nilai Siswa Pada Tugas ${
            rows[0]?.Task.title.toUpperCase()
              ? rows[0]?.Task.title.toUpperCase()
              : ""
          }`}
          columns={columns}
          data={filteredItems}
          pagination
          progressPending={loading}
          subHeader
          subHeaderComponent={subHeader}
          actions={subHeaderComponentMemo}
          defaultSortFieldId={1}
          //   customStyles={customStyles}
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
      {arrayScore && (
        <div className="hidden">
          <div ref={componentRef}>
            <StudentScorePertask
              data={filteredItems}
              nama={
                rows[0]?.Task.title.toUpperCase()
                  ? rows[0]?.Task.title.toUpperCase()
                  : ""
              }
              highest={arrayScore.length >= 1 ? Math.max(...arrayScore) : "-"}
              average={arrayScore.length >= 1 ? average(arrayScore) : "-"}
              lowest={arrayScore.length >= 1 ? Math.min(...arrayScore) : "-"}
              conditionalScore={conditionalScore}
            />
          </div>
        </div>
      )}
    </div>
  );
}
