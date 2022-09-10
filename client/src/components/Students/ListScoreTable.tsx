import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { DatePicker, Input, Select } from "antd";
import axios from "axios";
import moment from "moment";
import ButtonPrint from "../pdf/Button_PDF";
import YourScore from "../pdf/YourScore";
import { conditionalScore } from "../../utils/utils";

const { Search } = Input;
const { Option } = Select;

export default function ListScoreTable({ data, id }: any) {
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState<any>([]);
  const [filterText, setFilterText] = React.useState("");
  const [filter, setFilter] = React.useState<any>();
  const [mapel, setMapel] = React.useState<any>();
  const componentRef: any = React.useRef();
  const filteredItems = rows.filter(
    (item: any) =>
      (item.Classroom.name &&
        item.Classroom.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.Task.title &&
        item.Task.title.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.score && item.score === filterText.toLowerCase()) ||
      (item.Task.Mapel.nama &&
        item.Task.Mapel.nama.toLowerCase().includes(filterText.toLowerCase()))
  );
  React.useEffect(() => {
    axios
      .get("/api/getmapel")
      .then((res) => {
        setMapel(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  interface DataRow {
    name: string;
    email: string;
    phone: string;
    profile: string;
    role: string;
  }

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
      name: "Mapel",
      selector: (row: any) => row.Task.Mapel.nama,
      sortable: true,
    },
    {
      name: "Guru",
      selector: (row: any) => row.Classroom.User.name,
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
      name: "Status",
      cell: (row: any) => <p>{conditionalScore(row.score)}</p>,
    },
    {
      name: "Tanggal",
      selector: (row: any) =>
        moment(row.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    },
  ];

  const handleRange = (dates: any) => {
    if (dates) {
      let start = moment(dates[0]).subtract(1, "day").format("YYYY-MM-DD");
      let end = moment(dates[1]).add(1, "day").format("YYYY-MM-DD");

      setFilter([start, end]);
      return;
    }
    return setFilter([]);
  };
  const handleSelectClick = (value: string) => {
    setFilterText(value);
  };

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <Select
          defaultValue="Mata Pelajaran"
          style={{ width: 200 }}
          onChange={handleSelectClick}
          allowClear={false}
        >
          <Option value="">Mata Pelajaran</Option>
          {mapel?.map((data: any, key: any) => (
            <Option value={data.nama}>{data.nama}</Option>
          ))}
        </Select>
        <Search
          placeholder="Cari"
          allowClear
          style={{ width: 304, marginLeft: "10px" }}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
    );
    //eslint-disable-next-line
  }, [filterText, filteredItems, mapel]);

  React.useEffect(() => {
    if (data && data.data) {
      setLoading(false);
      setRows(data.data.data);
    } else {
      setLoading(false);
      setRows([]);
    }
  }, [data, id]);

  let filteredDate =
    filter && filter.length > 1
      ? rows.filter((item: any) =>
          filterText
            ? item.Task.Mapel.nama &&
              item.Task.Mapel.nama
                .toLowerCase()
                .includes(filterText.toLowerCase()) &&
              item.createdAt &&
              moment(moment(item.createdAt).format("YYYY-MM-DD")).isBetween(
                filter[0],
                filter[1]
              )
            : item.createdAt &&
              moment(moment(item.createdAt).format("YYYY-MM-DD")).isBetween(
                filter[0],
                filter[1]
              )
        )
      : filteredItems;

  return (
    <div className="w-full  px-12 flex flex-col mt-12 items-center justify-center shadow-md">
      <div className="w-full border p-5 shadow-md">
        <DataTable
          className=""
          title="Daftar Nilai Anda"
          columns={columns}
          data={filteredDate}
          pagination
          progressPending={loading}
          subHeader
          subHeaderComponent={
            <div style={{ width: "30.9rem" }} className=" flex">
              <div className="mr-2">
                <DatePicker.RangePicker
                  style={{ width: "23rem" }}
                  format="DD/MM/YYYY"
                  placeholder={["Dari Tanggal", "Sampai Tanggal"]}
                  onChange={(e) => handleRange(e)}
                />
              </div>
              <ButtonPrint componentRef={componentRef} />
            </div>
          }
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
      <div className="hidden">
        <div ref={componentRef}>
          <YourScore data={filteredDate} />
        </div>
      </div>
    </div>
  );
}
