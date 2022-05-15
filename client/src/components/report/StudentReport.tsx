import React from "react";

const StudentReport = ({ type, data, componentRef }: any) => {
  return (
    <div ref={componentRef}>
      <h1>{type}</h1>
      <h1>{data[0].name}</h1>
    </div>
  );
};

export default StudentReport;
