import React from "react";
import moment from "moment";
import Header_Report from "./Header_Report";

function YourScore({ data }: any) {
  return (
    <div className="px-7 py-2">
      <Header_Report />
      <h2 className="text-center font-bold text-2xl mt-5">
        Laporan Daftar Nilai
      </h2>
      <div className="mt-7 flex justify-between">
        <div>
          {" "}
          <table className="table">
            <tbody>
              <tr>
                <th className="text-left">Nama</th>
                <td>: {data[0]?.User?.name.toUpperCase()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 ">
        <table className="table-fixed border border-black">
          <thead>
            <tr>
              <th className="border border-black">Nama Tugas</th>
              <th className="border border-black">Keterangan</th>
              <th className="border border-black">Kelas</th>
              <th className="border border-black">Nilai</th>
              <th className="border border-black">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr key={index}>
                <td className="border border-black">{item.Task.title}</td>
                <td className="border border-black w-72">
                  {item.Task.description}
                </td>
                <td className="border border-black text-xs">
                  {item.Classroom.name}
                </td>
                <td className="border border-black text-center text-xl w-32">
                  {item.score}
                </td>
                <td className="border border-black">
                  {moment(item.createdAt).format("MMMM Do YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default YourScore;
