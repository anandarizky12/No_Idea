import React from "react";
import AvatarCustom from "../Avatar/AvatarCustom";

function StudentsCard({ student }: any) {
  console.log(student);
  return (
    <div className="border w-full mt-5 rounded-md shadow-md h-16">
      <div className="flex items-center h-full px-5 justify-between">
        <div className="flex items-center">
          <AvatarCustom size={"large"} src={student.User.profile} />
          <div className="ml-5 font-medium">{student.User.name}</div>
        </div>
        <div className="">Siswa</div>
      </div>
    </div>
  );
}

export default StudentsCard;
