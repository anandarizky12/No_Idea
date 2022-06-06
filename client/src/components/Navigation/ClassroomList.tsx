import { Avatar } from "antd";
import { colorArray } from "../../utils/utils";
import { useMemo } from "react";

function ClassroomList({ classroom, navigate }: any) {
  const bgColor: string = useMemo(() => {
    return colorArray[Math.floor(Math.random() * colorArray.length - 1)];
  }, []);

  return (
    <div
      onClick={() => {
        navigate(`classroom/${classroom.id}`);
      }}
      className="px-2 left-0 py-4 font-semibold text-primary flex items-center flex-row rounded-md hover:cursor-pointer"
    >
      <Avatar
        style={{
          color: "white",
          backgroundColor: bgColor,
        }}
      >
        {classroom.name.slice(0, 1)}
      </Avatar>
      <h1 className="ml-5 text-primary">{classroom.name}</h1>
    </div>
  );
}

export default ClassroomList;
