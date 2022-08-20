import { Avatar } from "antd";
import { colorArray } from "../../utils/utils";
import { useMemo } from "react";

function ClassroomList({ classroom, navigate }: any) {
  const bgColor: string = useMemo(() => {
    return colorArray[Math.floor(Math.random() * colorArray.length - 1)];
    // eslint-disable-next-line
  }, []);

  return (
    <div
      onClick={() => {
        navigate(`classroom/${classroom.id}`);
      }}
      className="px-1 left-0 py-2 font-semibold text-primary flex items-centerflex-row rounded-md hover:cursor-pointer"
    >
      <Avatar
        size={20}
        style={{
          color: "white",
          fontSize: "10px",
          backgroundColor: bgColor,
        }}
      >
        {classroom.name.slice(0, 1)}
      </Avatar>
      <h1 className="ml-5 text-primary p-0 m-0">{classroom.name}</h1>
    </div>
  );
}

export default ClassroomList;
