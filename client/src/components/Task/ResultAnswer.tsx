import React from "react";
import { Progress } from "antd";

interface Iprops {
  data: any;
}

function ResultAnswer({ data }: Iprops) {
  console.info(data);

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
              {data.title}
            </h1>
            <p className="text-xs text-gray-500">{data.description}</p>
          </div>
          <Progress
            width={85}
            type="circle"
            strokeColor={{
              //   "0%": "#F32424",
              //   "50%": "#FF8D29",
              "100%": "#36AE7C",
            }}
            percent={totalScore}
            format={(percent) => `${totalScore} `}
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
                  Jawaban Anda
                </span>{" "}
                : {item.Answer_task.answer}
              </p>
            </div>
            <div className="border-l border-gray-300 rounded-md text-center w-24 flex items-center justify-center bg-gray-500">
              <h1 className="m-0 font-bold text-gray-100 text-xl">
                {item.Answer_task.Score.score}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultAnswer;
