import { Image } from "antd";
import React from "react";
import ScoreTable from "./ScoreTable";

function Scores() {
  const score = false;
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full h-5/6">
      <div className="w-full flex flex-col items-center  bg-red-500">
        {score ? (
          <>
            <Image
              className="grayscale"
              width={300}
              preview={false}
              src={"/Score.png"}
            />
            <h1 className="text-gray-500 font-normal text-lg mt-2">
              Belum ada data nilai
            </h1>
          </>
        ) : (
          <ScoreTable />
        )}
      </div>
    </div>
  );
}

export default Scores;
