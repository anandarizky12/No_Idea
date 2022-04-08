import React from "react";
import Classcode from "./Classcode";
import CreateTaskButton from "./CreateTaskButton";

function Teacher({ classroom }: any) {
  return (
    <div className="flex my-5 w-3/4 ">
      {/* left team */}
      <div className="">
        {" "}
        <Classcode code={classroom.data.classcode} />
      </div>
      {/* right team */}
      <div className="w-full">
        <CreateTaskButton teacher={classroom.data.User} />
      </div>
    </div>
  );
}

export default Teacher;
