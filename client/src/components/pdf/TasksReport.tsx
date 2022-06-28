import Header_Report from "./Header_Report";
import moment from "moment";

function TasksReport({ task, name }: any) {
  console.log(task);
  return (
    <div className="p-12">
      <Header_Report />
      <h1 className="text-3xl text-center mt-5">Daftar Tugas</h1>
      <div className="mt-7 flex justify-between">
        <div>
          {" "}
          <table className="table">
            <tbody>
              <tr>
                <th className="text-left">Nama Kelas</th>
                <td>: {name}</td>
              </tr>
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
                <th className="border border-black text-xs text-left">Nama</th>
                <th className="border border-black text-xs text-center">
                  Deskripsi Tugas
                </th>
                <th className="border border-black text-xs text-center">
                  Batas Pengerjaan
                </th>
                <th className="border border-black text-xs text-center">
                  Jumlah Soal
                </th>
                <th className="border border-black text-xs text-center">
                  Dibuat Pada
                </th>
              </tr>
            </thead>
            <tbody className="text-primary text-sm font-light">
              {task &&
                task.data.map((task: any, index: number) => (
                  <tr key={index} className="border-b ">
                    <td className="border border-black text-center">
                      {index + 1}.
                    </td>
                    <td className="border border-black text-left">
                      <div className="flex items-center">
                        <span className="font-medium text-xs">
                          {task.title}
                        </span>
                      </div>
                    </td>
                    <td className="border border-black text-left">
                      <div className="flex items-center">
                        <span>{task.description}</span>
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <div className="flex items-center justify-center">
                        <span className=" text-xs">
                          {task.deadline
                            ? moment(task.deadline).format(
                                "MMMM Do YYYY, h:mm:ss a"
                              )
                            : "-"}
                        </span>
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <span>{task.Questions.length}</span>
                    </td>
                    <td className="border border-black text-center text-xs">
                      {moment(task.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
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

export default TasksReport;
