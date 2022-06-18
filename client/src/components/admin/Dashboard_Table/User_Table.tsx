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
import { ReportExcel } from "./ReportUsers";

const { Search } = Input;

export default function User_Table({
  users,
  id,
  setIsModalVisible,
  setId,
}: any) {
  const xx = [
    {
      id: 1,
      name: "Usram Bin Ahmed",
      phone: "0123456789",
      email: "usram@gmail.com",
      role: "guru",
      profile: null,
      jk: "Laki-Laki",
      createdAt: "2022-06-13T13:11:32.000Z",
      updatedAt: "2022-06-13T13:11:32.000Z",
    },
    {
      id: 2,
      name: "Ali Mahmud Aja",
      phone: "0821367126324",
      email: "Ali@gmail.com",
      role: "siswa",
      profile:
        "http://res.cloudinary.com/drgorgm6v/image/upload/v1655187500/elearning/efcvzhdb97yxzuia4kpb.png",
      jk: "Laki-Laki",
      createdAt: "2022-06-13T13:11:32.000Z",
      updatedAt: "2022-06-16T01:41:31.000Z",
    },
    {
      id: 3,
      name: "Mahmud Bin Ali",
      phone: "0123456789",
      email: "mahmud@gmail.com",
      role: "admin",
      profile: null,
      jk: "Perempuan",
      createdAt: "2022-06-13T13:11:32.000Z",
      updatedAt: "2022-06-13T13:11:32.000Z",
    },
    {
      id: 5,
      name: "Adi Ma",
      phone: "082176281231",
      email: "adi123@gmail.com",
      role: "siswa",
      profile: null,
      jk: "Perempuan",
      createdAt: "2022-06-16T05:53:37.000Z",
      updatedAt: "2022-06-16T05:53:37.000Z",
    },
  ];
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const handleButtonClick = (id: string) => {
    setIsModalVisible(true);
    setId(id);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const filteredItems = rows.filter(
    (item: any) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.email &&
        item.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.phone &&
        item.phone.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.role && item.role.toLowerCase().includes(filterText.toLowerCase()))
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
      name: "Nama Pengguna",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
    },
    {
      name: "Nomor Telepon",
      selector: (row: any) => row.phone,
      sortable: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Foto",
      selector: (row: any) => row.profile,
      sortable: true,
      style: {
        fontSize: "15px",
      },
      cell: (row: any) => {
        return <Avatar src={row.profile} />;
      },
    },
    {
      name: "Role",
      selector: (row: any) => row.role,
      cell: (row: any) => (
        <div>
          <span
            className={`${row.role == "admin" && "bg-blue-500"} ${
              row.role == "siswa" && "bg-green-500"
            } ${
              row.role == "guru" && "bg-red-500"
            } p-2  text-xs text-white rounded-md `}
          >
            {row.role}
          </span>
        </div>
      ),
      sortable: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Aksi",
      cell: (row: any) => (
        <>
          <span
            onClick={() => handleButtonClick(row.id)}
            className="text-xl text-yellow-400 mr-4"
          >
            <EditOutlined />
          </span>
          {"     "}
          <span
            onClick={() => handleDelete(row.id)}
            className="text-xl text-red-600 mr-4"
          >
            <DeleteOutlined />
          </span>
        </>
      ),
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <ReportExcel filteredItems={filteredItems} />
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
    if (users && users.task) {
      setLoading(false);
      setRows(users.task);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [users, id]);
  const data1 = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

  console.log(data1);
  console.log(filteredItems);
  return (
    <div className="w-full px-12 flex flex-col mt-12 items-center justify-center shadow-md">
      <div className="w-full border p-5 shadow-md">
        <DataTable
          title="Daftar Pengguna Sistem"
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
      </div>
    </div>
  );
}
