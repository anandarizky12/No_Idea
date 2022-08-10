import moment from "moment";
import Header_Report from "./Header_Report";

function ResultAnswerPDF({ data, totalScore }: any) {
  return (
    <div className="px-7 py-2">
      <Header_Report />
      <h2 className="text-center font-bold text-2xl mt-5">
        Laporan Hasil Pengerjaan
      </h2>
      <div className="mt-7 flex justify-between">
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th className="text-left">Nama</th>
                <td>
                  : {data?.Questions[0]?.Answer_task?.User.name.toUpperCase()}
                </td>
              </tr>
              <tr>
                <th className="text-left">Guru</th>
                <td>: {data?.Classroom.User.name}</td>
              </tr>
              <tr>
                <th className="text-left">Kelas</th>
                <td>: {data?.Mapel?.nama}</td>
              </tr>
              <tr>
                <th className="text-left">Tugas</th>
                <td>: {data?.title}</td>
              </tr>

              <tr>
                <th className="text-left">Tanggal Pengerjaan</th>
                <td>
                  :{" "}
                  {moment(data?.Questions[0].Answer_task.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
              </tr>
              <tr>
                <th className="text-left">Jumlah Soal</th>
                <td>: {data?.Questions.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-44">
          <table className="table border border-black w-full rounded-md">
            <tbody>
              <tr className="">
                <th className="text-lg border-b border-black text-center">
                  Nilai
                </th>
              </tr>
              <tr>
                <td className="text-5xl text-center">{totalScore}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 ">
        {data.Questions.map((item: any, index: number) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-md flex my-4 "
          >
            <div className="border-r border-gray-300   text-center w-16 flex items-center justify-center">
              <h1 className="m-0 font-bold  text-xl">{index + 1}</h1>
            </div>
            <div className="flex justify-center flex-col h-full mx-4 p-2 w-full">
              <h1 className="font-semibold  text-gray-600 p-0 m-0">
                {item.question}
              </h1>
              <p className="  p-0 m-0">
                <span className="font-semibold ">Jawaban</span> :{" "}
                {item.Answer_task.answer}
              </p>
            </div>
            <div className="border-l border-gray-300 rounded-md text-center w-24 flex items-center justify-center">
              <h1 className="m-0 font-bold text-xl">
                {item.Answer_task.Score.score}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultAnswerPDF;
