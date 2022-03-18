import React from "react";
import { useParams } from "react-router-dom";
import Classcode from "./Classcode";
import CreateTaskButton from "./CreateTaskButton";
function Classroom() {
  const { id } = useParams();

  return (
    <div className="mt-7 w-full flex justify-center items-center flex-col">
      <div className="w-3/4 h-64 bg-gray-300 rounded-md p-3 font-semibold relative  bg-hero">
        <h1 className="p-4 absolute bottom-0 text-3xl text-white">Classname</h1>
      </div>
      <div className="flex my-5 w-3/4 ">
        {/* left team */}
        <div className="">
          {" "}
          <Classcode />
        </div>
        {/* right team */}
        <div className="w-full">
          <CreateTaskButton />
        </div>
      </div>
    </div>
  );
}

export default Classroom;
