import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";

function PopupMenu() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Edit Classroom
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Copy Classcode
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Delete Classroom
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    // <Menu style={{ width: 256 }}>
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomRight">
        <MoreOutlined className="text-xl hover:cursor-pointer" />
      </Dropdown>
    </Space>

    // </Menu>
  );
}

export default PopupMenu;
