import Header_Report from "./Header_Report";
import moment from "moment";

function TasksReport({ task, name }: any) {
  console.log(task);
  return (
    <div className="p-12">
      <Header_Report />
      <h1 className="text-3xl text-center mt-5">
        Daftar Tugas Pada Kelas {name}
      </h1>
      <div className="w-full lg:w-6/6">
        <div className="bg-white shadow-md rounded my-6 ">
          <table className="min-w-full border">
            <thead className="border-b bg-gray-200">
              <tr className=" text-primary uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-center">Deskripsi Tugas</th>
                <th className="py-3 px-6 text-center">Batas Pengerjaan</th>
                <th className="py-3 px-6 text-center">Jumlah Soal</th>
                <th className="py-3 px-6 text-center">Dibuat Pada</th>
              </tr>
            </thead>
            <tbody className="text-primary text-sm font-light">
              {task &&
                task.data.map((task: any, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium">{task.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{task.description}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className="font-semibold">
                          {task.deadline
                            ? moment(task.deadline).format(
                                "MMMM Do YYYY, h:mm:ss a"
                              )
                            : "-"}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{task.Questions.length}</span>
                    </td>
                    <td className="py-3 px-6 text-center font-semibold">
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
