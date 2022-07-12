import { Progress } from "antd";
import EachScore from "./EachScore";

interface Iprops {
  data: any;
}

function EditScoreComponent({ data }: Iprops) {
  const totalScore = data.Questions.reduce(
    (acc: number, cur: any) => acc + cur.Answer_task.Score.score,
    0
  );

  return (
    <div className="border p-8 shadow-lg w-4/6 mt-8">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="font-semibold text-2xl text-gray-500">
              Edit Nilai Siswa
            </h1>
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="text-left text-gray-500">Nama</th>
                    <td className="text-gray-500">
                      :{" "}
                      {data?.Questions[0]?.Answer_task?.User.name.toUpperCase()}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left text-gray-500">Nama Tugas</th>
                    <td className="text-gray-500">: {data.title}</td>
                  </tr>
                  <tr>
                    <th className="text-left text-gray-500">Deskripsi</th>
                    <td className="text-gray-500">: {data.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Progress
            width={85}
            type="circle"
            strokeColor={{
              "100%": "#36AE7C",
            }}
            percent={totalScore}
            format={() => `${totalScore} `}
          />
        </div>
      </div>
      <div className="mt-8 ">
        {data.Questions.map((item: any, index: number) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-md flex my-4 "
          >
            <div className="border-r border-gray-300   text-center w-16 flex items-center justify-center">
              <h1 className="m-0 font-bold text-gray-500 text-xl">
                {index + 1}
              </h1>
            </div>
            <div className="flex justify-center flex-col h-full mx-4 p-2 w-full">
              <h1 className="font-semibold  text-gray-600 p-0 m-0">
                {item.question}
              </h1>
              <p className=" text-gray-500 p-0 m-0">
                <span className="font-semibold text-gray-500">
                  Jawaban Siswa
                </span>{" "}
                : {item.Answer_task.answer}
              </p>
              <EachScore data={data} item={item} />
            </div>
            {/* <div className="border-l border-gray-300 rounded-md text-center w-24 flex items-center justify-center bg-gray-500">
              <h1 className="m-0 font-bold text-gray-100 text-xl">
                {item.Answer_task.Score.score}
              </h1>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditScoreComponent;
