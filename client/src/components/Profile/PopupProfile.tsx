import React from "react";
import { Menu, Dropdown, Space, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import { logout } from "../../actions/user";

function PopupProfile() {
  const { confirm } = Modal;
  const navigate = useNavigate();

  function showConfirm() {
    confirm({
      title: "Are you sure wanna logout?",
      icon: <ExclamationCircleOutlined />,

      onOk() {
        logout();
      },
      onCancel() {},
    });
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/profile")} icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item onClick={showConfirm} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Space wrap>
      <div className="">
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar
            className="text-xl hover:cursor-pointer"
            size="large"
            src={"https://joeschmoe.io/api/v1/random"}
          />
        </Dropdown>
      </div>
    </Space>
  );
}

export default PopupProfile;
