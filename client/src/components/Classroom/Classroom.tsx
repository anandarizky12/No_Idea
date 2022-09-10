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

function Classroom() {
  const { id } = useParams();
  const classes = useSelector((state: any) => state.getClassroom);
  const [loading, setLoading] = React.useState(true);
  const user = useSelector((state: any) => state.user);
  const { classroom } = classes;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getClassroom(id, setLoading));
  }, [id, dispatch]);

  if (!classes.isLoading && classes.isError && classes.error)
    return (
      <DynamicError
        status={classes?.error?.data?.error?.status}
        message={classes?.error?.data?.error?.message}
      />
    );

  return (
    <div className="mt-7 w-full flex justify-center items-center flex-col px-5 md:p-0">
      {classroom && !loading ? (
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
              backgroundPosition: "center",
            }}
            className={` w-full h-64 bg-gray-300 rounded-md p-3 font-semibold relative md:w-3/4`}
          >
            <div className="p-4 absolute bottom-0">
              <h1 className="text-3xl text-secondary">{classroom.data.name}</h1>
              <div className="flex items-center">
                <AvatarCustom
                  size={"small"}
                  src={classroom.data.User.profile}
                />
                <h4 className="ml-2 text-secondary text-xs font-light">
                  {classroom.data.User.name}
                </h4>
              </div>
            </div>

            <h3 className="p-4 text-xs text-secondary font-light">
              Dibuat pada {moment(classroom.data.createdAt).calendar()}
            </h3>
            <div className="absolute text-secondary text-xl right-4 top-4 hover:cursor-pointer">
              <SettingOutlined />
            </div>
          </div>
          {user.role === "guru" ? (
            <Teacher classroom={classroom} user={user} />
          ) : (
            <Student classroom={classroom} />
          )}
        </>
      ) : (
        <div
          style={{ minHeight: "90vh" }}
          className="text-center text-primary w-full flex items-center justify-center"
        >
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
    </div>
  );
}

export default Classroom;
