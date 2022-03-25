import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../actions/task";

import EditTask from "../CreateandEdit_Task/EditTask";

function PopupMenu({ task }: any) {
  const dispatch = useDispatch();
  const [open, setOpenEdit] = React.useState(false);
  function handleDelete() {
    const userVal = confirm("Apakah kamu yakin tuk menghapus Tugas ini ? ");
    if (userVal) dispatch(deleteTask(task.id));
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setOpenEdit(!open)}>Edit Tugas</Menu.Item>
      <Menu.Item onClick={handleDelete}>Delete Tugas</Menu.Item>
    </Menu>
  );

  return (
    // <Menu style={{ width: 256 }}>
    // <Space wrap>
    <div className="">
      <Dropdown overlay={menu} placement="bottomRight">
        <MoreOutlined className="text-xl hover:cursor-pointer" />
      </Dropdown>
      <EditTask task={task} setOpen={setOpenEdit} open={open} />
    </div>

    // </Space>

    // </Menu>
  );
}

export default PopupMenu;
