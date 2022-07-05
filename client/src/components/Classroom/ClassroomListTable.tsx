import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { Input } from "antd";
import moment from "moment";
import ButtonPrint from "../pdf/Button_PDF";
import ClassroomListPDF from "../pdf/ClassroomListPDF";

const { Search } = Input;

export default function ClassroomListTable({ data, id }: any) {
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const componentRef: any = React.useRef();
  const filteredItems = rows.filter(
    (item: any) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.classcode &&
        item.classcode.toLowerCase().includes(filterText.toLowerCase()))
    //     ||
    // (item.score && item.score == filterText.toLowerCase())
  );

  const columns: TableColumn<any>[] = [
    {
      name: "Nama Kelas",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Keterangan",
      selector: (row: any) => row.description,
    },
    {
      name: "Kode Kelas",
      selector: (row: any) => row.classcode,
      width: "6rem",
    },
    {
      name: "Jumlah Siswa",
      selector: (row: any) => row.Student_Classrooms.length,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Jumlah Tugas",
      selector: (row: any) => row.Tasks.length,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Jumlah Materi",
      selector: (row: any) => row.Materis.length,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Tanggal Dibuat",
      selector: (row: any) =>
        moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
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
    if (data && data.class) {
      setLoading(false);
      setRows(data.class);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data, id]);

  return (
    <div className="w-full px-12 flex flex-col mt-12 items-center justify-center shadow-md">
      <div className="w-full border p-5 shadow-md">
        <DataTable
          title="Daftar Kelas Anda"
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
      <div className="hidden">
        <div ref={componentRef}>
          <ClassroomListPDF data={filteredItems} />
        </div>
      </div>
    </div>
  );
}
