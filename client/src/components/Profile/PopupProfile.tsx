import { Menu, Dropdown, Space, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { logout } from "../../actions/user";
import AvatarCustom from "../Avatar/AvatarCustom";

function PopupProfile({ user }: any) {
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
          <div>
            <AvatarCustom src={user.profile} size={"large"} />
          </div>
        </Dropdown>
      </div>
    </Space>
  );
}

export default PopupProfile;
