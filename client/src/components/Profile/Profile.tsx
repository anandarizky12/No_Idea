import React from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user";
import AvatarCustom from "../Avatar/AvatarCustom";
import { EditProfile } from "./EditProfile";
import { KeyOutlined } from "@ant-design/icons";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.getUser);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(user);

  return (
    <div className="flex items-center justify-center">
      {user && user.detail_user ? (
        <div className="bg-profile w-80 border flex items-center p-4 justify-center shadow-md rounded-md  font-semibold relative mt-7">
          <div className="p-4  flex flex-col  justify-center items-center w-full">
            {/* <div className="bg-gray-300  w-full h-64"></div> */}
            <div className=" mt-6 flex w-full  justify-center">
              <div className="flex flex-col mt-10 justify-center items-center">
                <AvatarCustom
                  size={{
                    xs: 40,
                    sm: 80,
                    md: 120,
                    lg: 120,
                    xl: 120,
                    xxl: 180,
                  }}
                  src={user.detail_user.profile}
                />
                <div className="mt-5 text-center ">
                  <h1 className="text-2xl text-white m-0">
                    {user.detail_user.name}
                  </h1>
                  <h2 className="text-gray-400 font-light text-xs">
                    {user.detail_user.email}
                  </h2>
                </div>
                <div className="bg-gray-200 mt-5 flex items-center justify-center rounded-full w-16">
                  <KeyOutlined className="mr-1" />
                  <h1 className="font-semibold p-0 m-0">
                    {user.detail_user.role}
                  </h1>
                </div>
              </div>
              {/* <div className="flex flex-col items-center mt-4">
                <h2 className="text-xs text-gray-500">
                  {user.detail_user.email}
                </h2>
                <h3 className="text-lg font-light">{user.detail_user.role}</h3>
                <h3 className="text-lg font-light">{user.detail_user.phone}</h3>
              </div> */}
            </div>
            <div className="absolute top-5 right-5">
              <EditProfile />
            </div>
          </div>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}

export default Profile;
