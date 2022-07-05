import React from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { customStyles } from "./Styles";
import { TableColumn } from "react-data-table-component";
import { Input } from "antd";
import { conditionalScore } from "../../../utils/utils";
import ButtonPrint from "../../pdf/Button_PDF";
import AllScoreInAppPDF from "../../pdf/AllScoreInAppPDF";

const { Search } = Input;

export default function Scores_Table({ data }: any) {
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const componentRef: any = React.useRef();
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

      sortable: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Tanggal Pengerjaan",
      selector: (row: any) =>
        moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
      sortable: true,
      style: {
        fontSize: "10px",
      },
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
          title="Daftar Nilai Seluruh Siswa Pada Aplikasi"
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
      <div className="hidden">
        <div ref={componentRef}>
          <AllScoreInAppPDF data={filteredItems} />
        </div>
      </div>
    </div>
  );
}
