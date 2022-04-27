import React from "react";

const StudentReport = ({ data, componentRef }: any) => {
  return (
    <div ref={componentRef}>
      <h1>Bangsat</h1>
      <h1>{data.name}</h1>
      <h1>{data.classcode}</h1>
      <h1>{data.idx}</h1>
    </div>
  );
};

export default StudentReport;
