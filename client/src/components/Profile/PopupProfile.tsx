import { Menu, Dropdown, Space, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import showConfirm from "../../utils/Confirm";
import { logout } from "../../actions/user";
import AvatarCustom from "../Avatar/AvatarCustom";

function PopupProfile({ user }: any) {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/profile")} icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item
        onClick={() => showConfirm("Apa Anda Yakin Ingin Keluar ?", logout)}
        icon={<LogoutOutlined />}
      >
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
