import { Avatar, Button, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user";
import { SettingOutlined } from "@ant-design/icons";
import { EditProfile } from "./EditProfile";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.getUser);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(user);

  return (
    <div className="flex items-center justify-center ">
      {user && user.detail_user ? (
        <div className="w-2/4 h-64 border flex items-center justify-center shadow-md rounded-md p-3 font-semibold relative mt-7">
          <div className="p-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 80, xl: 120, xxl: 180 }}
                src={"https://joeschmoe.io/api/v1/random"}
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-3xl">{user.detail_user.name}</h1>
              <h3 className="text-lg font-light">{user.detail_user.role}</h3>
              <h3 className="text-lg font-light">{user.detail_user.phone}</h3>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <EditProfile />
          </div>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}

export default Profile;
