import { Menu, Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import showConfirm from "../../utils/Confirm";
import { logout } from "../../actions/user";
import AvatarCustom from "../Avatar/AvatarCustom";

function PopupProfile({ user }: any) {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => navigate("/admin/profile")}
        icon={<UserOutlined />}
      >
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
      <div>
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
