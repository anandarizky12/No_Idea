import React from "react";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Left from "./Left";
import Create from "../Create_Classroom/Create";
import { useLocation, useNavigate } from "react-router-dom";
import PopupProfile from "../Profile/PopupProfile";
import { useSelector } from "react-redux";
import { JoinClass } from "../JoinClass/JoinClass";

function Top(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const id: string = location.pathname.split("/")[2];
  const user = useSelector((state: any) => state.user);

  return (
    <>
      <nav className="border-b h-16  border-gray-300 flex justify-between items-center px-6">
        <div className="flex items-center justify-center">
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="text-lg cursor-pointer mr-5"
          />
          <div
            onClick={() => navigate("/")}
            className="font-header font-bold text-primary cursor-pointer"
          >
            SMKN 1 SUKAMARA
          </div>
        </div>
        {location.pathname.includes("classroom") ? (
          <ul
            className={`hidden ${
              user.role === "guru" ? "w-96" : "w-80"
            } h-full items-end justify-between md:flex`}
          >
            <li
              onClick={() => navigate(`/classroom/${id}`)}
              className={`${
                location.pathname == `/classroom/${id}`
                  ? "border-b-4  border-gray-500"
                  : ""
              } font-medium text-primary text-base cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center`}
            >
              Kelas
            </li>
            <li
              onClick={() => navigate(`/classroom/${id}/tasks`)}
              className={`${
                location.pathname == `/classroom/${id}/tasks` ||
                location.pathname.includes(`answertask`)
                  ? "border-b-4  border-gray-500"
                  : ""
              } font-medium text-primary text-base cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center`}
            >
              Tugas
            </li>
            <li
              onClick={() => navigate(`/classroom/${id}/materi`)}
              className={`${
                location.pathname == `/classroom/${id}/materi`
                  ? "border-b-4  border-gray-500"
                  : ""
              } font-medium text-primary text-base cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center`}
            >
              Materi
            </li>
            <li
              onClick={() => navigate(`/classroom/${id}/students`)}
              className={`${
                location.pathname == `/classroom/${id}/students` ||
                location.pathname.includes(`student`)
                  ? "border-b-4  border-gray-500"
                  : ""
              } font-medium text-primary text-base cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center`}
            >
              Anggota{" "}
            </li>
            {user.role === "guru" ? (
              <li
                onClick={() => navigate(`/classroom/${id}/scores`)}
                className={`${
                  location.pathname == `/classroom/${id}/scores`
                    ? "border-b-4  border-gray-500"
                    : ""
                } font-medium text-primary text-base cursor-pointer hover:text-blue-500  rounded-sm h-4/6 w-14 flex justify-center`}
              >
                Nilai
              </li>
            ) : null}
          </ul>
        ) : null}

        <div className="flex items-center" id="icons">
          {user.role === "siswa" ? (
            <JoinClass />
          ) : (
            <Tooltip placement="bottom" title="Buat Kelas">
              <PlusOutlined
                onClick={() => setOpenRight(true)}
                className="text-xl text-gray-400 cursor-pointer mr-7"
              />
            </Tooltip>
          )}

          <PopupProfile user={user} />
        </div>
      </nav>
      <Left setOpen={setOpen} open={open} />
      <Create setOpenRight={setOpenRight} openRight={openRight} />
    </>
  );
}

export default Top;
