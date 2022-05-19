import React from "react";
import { BookOutlined } from "@ant-design/icons";
import moment from "moment";
import PopupMenu from "./Popup";
import { Avatar, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function TaskCard({ task, user }: any) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col w-full border rounded-md shadow-md border-b border-gray-300 mb-5">
      <div className=" h-12 w-full flex items-center p-8 justify-between">
        <div className="flex items-center justify-center">
          <Avatar
            size={"large"}
            icon={<BookOutlined className="text-xl mr-2 text-gray-500" />}
          />
          <div className="text-gray-500 ml-5">
            {task.title}
            {/* <h1 className="text-gray-500 font-normal text-xs mr-2 hidden md:block">
              Dibuat pada {moment(task.createdAt).format("MMM Do YY")}
            </h1>{" "} */}
          </div>
        </div>
        <div className="flex items-center justify-center ">
          {/* <MoreOutlined className="text-xl text-gray-500 hover:cursor-pointer" /> */}
          {user.role === "guru" && <PopupMenu user={user} task={task} />}
        </div>
      </div>
      <div className="border-t relative">
        <div className="flex flex-col items-center justify-between px-8 py-5">
          <div className="w-full">
            <p className={`text-gray-500 font-normal text-xs`}>
              {task.deadline
                ? "Batas Waktu " + moment(task.deadline).format("MMM Do YY")
                : "Tidak Ada Batas Waktu"}
            </p>
            <p>{task.description}</p>
          </div>
          {user.role === "siswa" && (
            <div className="w-full">
              <Button
                onClick={() =>
                  navigate(`/classroom/${id}/answertask/${task.id}`)
                }
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  textAlign: "left",
                  float: "right",
                }}
              >
                Kerjakan Tugas
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
