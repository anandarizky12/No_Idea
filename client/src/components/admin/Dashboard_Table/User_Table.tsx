import React from "react";
import DataTable from "react-data-table-component";
import Export from "react-data-table-component";
import { customStyles, columns } from "./Styles";
import { Button, Input } from "antd";
import { CSVLink, CSVDownload } from "react-csv";

const { Search } = Input;

export default function User_Table({ users, id }: any) {
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

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
  const actionsMemo = React.useMemo(
    () => <CSVLink data={filteredItems}>Download me</CSVLink>,
    []
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="">
        <Search
          placeholder="input search text"
          allowClear
          style={{ width: 304 }}
          onChange={(e) => setFilterText(e.target.value)}
        />
        {/* {actionsMemo} */}
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  React.useEffect(() => {
    if (users && users.task) {
      setLoading(false);
      setRows(users.task);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [users, id]);
  console.log(filteredItems);
  return (
    <div className="w-full px-12 flex flex-col mt-12 items-center justify-center">
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
