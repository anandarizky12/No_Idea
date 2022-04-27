import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Copy from "copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import { deleteClassroom } from "../../actions/classroom";
import Edit from "../Edit_Classroom/Edit";

function PopupMenu({ classroom, id }: any) {
  const dispatch = useDispatch();
  const [open, setOpenEdit] = React.useState(false);
  function handleDelete() {
    const userVal = window.confirm(
      "Apakah kamu yakin tuk menghapus kelas ini ? " + " " + id
    );
    if (userVal) dispatch(deleteClassroom(id));
  }

  function handleCopy() {
    Copy(classroom.classcode);
    alert("Kode kelas berhasil disalin");
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setOpenEdit(!open)}>Edit Classroom</Menu.Item>
      <Menu.Item onClick={handleCopy}>Copy Classcode</Menu.Item>
      <Menu.Item onClick={handleDelete}>Delete Classroom</Menu.Item>
    </Menu>
  );

  return (
    // <Menu style={{ width: 256 }}>
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomRight">
        <MoreOutlined className="text-xl hover:cursor-pointer" />
      </Dropdown>
      <Edit
        classroom={classroom}
        id={id}
        open={open}
        setOpenEdit={setOpenEdit}
      />
    </Space>

    // </Menu>
  );
}

export default PopupMenu;
