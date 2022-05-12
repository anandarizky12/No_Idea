import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getClassroom } from "../../actions/classroom";
import { Space, Spin } from "antd";
import DynamicError from "../404/DynamicError";
import moment from "moment";
import Teacher from "./Teacher";
import { SettingOutlined } from "@ant-design/icons";
import Student from "./Student";
import AvatarCustom from "../Avatar/AvatarCustom";
import { getTaskInClassroom } from "../../actions/task";

function Classroom() {
  const { id } = useParams();
  const classes = useSelector((state: any) => state.getClassroom);
  const user = useSelector((state: any) => state.user);
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const { task } = taskData;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getClassroom(id));
    dispatch(getTaskInClassroom(id));
  }, [id]);

  const { classroom } = classes;

  console.log("yayyayayy");

  if (!classes.isLoading && classes.isError && classes.error)
    return (
      <DynamicError
        status={classes.error.data.status}
        message={classes.error.data.message}
      />
    );

  return (
    <div className="mt-7 w-full flex justify-center items-center flex-col">
      {classes.isLoading && !classes.isError && !classroom ? (
        <div className="text-center text-gray-500 h-screen w-full flex items-center justify-center">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(10, 10, 10, 15),rgba(255, 255, 255, 0.007)), 
              url(${
                classroom.data.banner
                  ? classroom.data.banner
                  : "https://source.unsplash.com/1200x400?school"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={` w-3/4 h-64 bg-gray-300 rounded-md p-3 font-semibold relative `}
          >
            <div className="p-4 absolute bottom-0">
              <h1 className="text-3xl text-white">{classroom.data.name}</h1>
              <div className="flex items-center">
                <AvatarCustom
                  size={"small"}
                  src={classroom.data.User.profile}
                />
                <h4 className="ml-2 text-white text-xs font-light">
                  {classroom.data.User.name}
                </h4>
              </div>
            </div>

            <h3 className="p-4 text-xs text-white font-light">
              Dibuat pada {moment(classroom.data.createdAt).calendar()}
            </h3>
            <div className="absolute text-white text-xl right-4 top-4 hover:cursor-pointer">
              <SettingOutlined />
            </div>
          </div>
          {user.role === "guru" ? (
            <Teacher classroom={classroom} user={user} />
          ) : (
            <Student classroom={classroom} />
          )}
        </>
      )}
    </div>
  );
}

export default Classroom;
