import React from "react";
import Card_Member from "./Card_Member";

function Student({ classroom }: any) {
  return (
    <div className="flex my-5 w-3/4 ">
      {/* left team */}
      <div className="">
        <Card_Member />
      </div>
      {/* right team */}
      <div className="w-full"></div>
    </div>
  );
}

export default Student;
