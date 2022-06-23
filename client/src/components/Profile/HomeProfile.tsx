import React from "react";
import { Avatar, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import AvatarCustom from "../Avatar/AvatarCustom";
import { KeyOutlined } from "@ant-design/icons";

function HomeProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.getUser);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="p-3 flex items-center border  my-3 bg-white border-gray-300 shadow-sm rounded-md">
      {user && user.detail_user ? (
        <div className="w-full">
          <div className="flex items-center w-full">
            <div>
              <AvatarCustom size={50} src={user.detail_user.profile} />
            </div>
            <div className="ml-2 w-full">
              <h1 className="font-medium p-0 m-0">{user.detail_user.name}</h1>
              <div className="flex justify-between">
                <p className="text-gray-400 p-0 m-0 text-xs">Lihat Profile</p>
                <p className="text-gray-400 p-0 m-0 text-xs">
                  {user.detail_user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default HomeProfile;
