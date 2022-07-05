import moment from "moment";
import Header_Report from "./Header_Report";

function ClassroomListPDF({ data }: any) {
  return (
    <div className="px-7 py-2">
      <Header_Report />
      <h2 className="text-center font-bold text-2xl mt-5">
        Laporan Data Kelas
      </h2>
      <div className="mt-7 flex justify-between">
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th className="text-left">Nama Guru</th>
                <td>: {data[0]?.User.name}</td>
              </tr>

              {/* <tr>
                <th className="text-left">Jumlah Siswa Menjawab</th>
                <td>: {data?.Questions.length}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full lg:w-6/6">
        <div className=" shadow-md rounded my-6 ">
          <table className="min-w-full border">
            <thead className="border-b">
              <tr className=" text-primary uppercase text-sm leading-normal">
                <th className="border border-black text-xs text-left">No.</th>

                <th className="border border-black text-xs text-center">
                  Nama Kelas
                </th>
                <th className="border border-black text-xs text-center">
                  Keterangan
                </th>
                <th className="border border-black text-xs text-center">
                  Kode Kelas
                </th>
                <th className="border border-black text-xs text-center">
                  Jumlah Siswa
                </th>
                <th className="border border-black text-xs text-center">
                  Jumlah Tugas
                </th>
                <th className="border border-black text-xs text-center">
                  Jumlah Materi
                </th>
                <th className="border border-black text-xs text-center">
                  Tanggal dibuat
                </th>
              </tr>
            </thead>
            <tbody className="text-primary text-sm font-light">
              {data &&
                data.map((item: any, index: number) => (
                  <tr key={index} className="border-b ">
                    <td className="border border-black text-center">
                      {index + 1}.
                    </td>
                    <td className="border border-black text-left">
                      <div className="flex items-center">
                        <span className="font-medium text-xs">{item.name}</span>
                      </div>
                    </td>
                    <td className="border border-black text-left">
                      <div className="flex items-center">
                        <span>{item.description}</span>
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <div className="flex items-center justify-center">
                        <span className=" text-xs">{item.classcode}</span>
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.Student_Classrooms.length}</span>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.Tasks.length}</span>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.Materis.length}</span>
                    </td>
                    <td className="border border-black text-center text-xs">
                      {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClassroomListPDF;
