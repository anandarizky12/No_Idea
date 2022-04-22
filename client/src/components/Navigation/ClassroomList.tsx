import { Avatar } from "antd";

function ClassroomList({ classroom, navigate }: any) {
  const colorArray = ["blue", "green", "purple", "red", "orange"];
  return (
    <div
      onClick={() => {
        navigate(`classroom/${classroom.id}`);
      }}
      className="px-2 left-0 py-4 font-semibold text-gray-500 flex items-center flex-row rounded-md hover:cursor-pointer"
    >
      <Avatar
        style={{
          color: "white",
          backgroundColor: colorArray[Math.floor(Math.random() * 5)],
        }}
      >
        {classroom.name.slice(0, 1)}
      </Avatar>
      <h1 className="ml-5 text-gray-500">{classroom.name}</h1>
    </div>
  );
}

export default ClassroomList;
