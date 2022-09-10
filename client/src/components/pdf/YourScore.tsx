import moment from "moment";
import HeaderReport from "./HeaderReport";
import { conditionalScore } from "../../utils/utils";

function YourScore({ data }: any) {
  return (
    <div className="px-7 py-2">
      <HeaderReport />
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
              <tr>
                <th className="text-left">Email</th>
                <td>: {data[0]?.User?.email}</td>
              </tr>
              <tr>
                <th className="text-left">Telepon</th>
                <td>: {data[0]?.User?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 ">
        <table className="table-fixed border border-black">
          <thead>
            <tr>
              <th className="border border-black">No.</th>
              <th className="border border-black">Nama Tugas</th>
              <th className="border border-black">Mapel</th>
              <th className="border border-black">Keterangan</th>
              <th className="border border-black">Guru</th>
              <th className="border border-black">Kelas</th>
              <th className="border border-black">Nilai</th>
              <th className="border border-black">Status</th>
              <th className="border border-black">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr key={index}>
                <td className=" p-1 border border-black">{index + 1}</td>
                <td className=" p-1 border border-black">{item.Task.title}</td>
                <td className=" p-1 border border-black text-xs">
                  {item.Task.Mapel.nama}
                </td>
                <td className=" p-1 border border-black">
                  {item.Task.description}
                </td>
                <td className=" p-1 border border-black text-xs">
                  {item.Classroom.User.name}
                </td>
                <td className=" p-1 border border-black text-xs">
                  {item.Classroom.name}
                </td>
                <td className=" p-1 border border-black text-center text-xl">
                  {item.score}
                </td>
                <td className=" p-1 border border-black text-center">
                  {conditionalScore(item.score)}
                </td>
                <td className=" p-1 border border-black">
                  {moment(item.createdAt).format("MMMM Do YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex mt-4">
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
  );
}

export default YourScore;
