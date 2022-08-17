import React from "react";
import { Menu, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/task";
import { useNavigate } from "react-router-dom";
import EditTask from "../CreateandEdit_Task/EditTask";
import { useParams } from "react-router-dom";

function PopupMenu({ task, user, setAlert }: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpenEdit] = React.useState(false);

  function handleDelete() {
    let userVal = window.confirm("Apakah kamu yakin tuk menghapus Tugas ini ?");
    if (userVal) dispatch(deleteTask(task.id, task.Classroom.id, setAlert));
  }

  const teacherMenu = (
    <Menu>
      <Menu.Item onClick={() => setOpenEdit(!open)}>Edit Tugas</Menu.Item>
      <Menu.Item onClick={handleDelete}>Delete Tugas</Menu.Item>
    </Menu>
  );

  const studentMenu = (
    <Menu>
      <Menu.Item
        onClick={() => navigate(`/classroom/${id}/answertask/${task.id}`)}
      >
        Jawab Tugas
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="">
      <Dropdown
        overlay={user.role === "guru" ? teacherMenu : studentMenu}
        placement="bottomRight"
      >
        <MoreOutlined className="text-xl hover:cursor-pointer" />
      </Dropdown>
      <EditTask task={task} setOpen={setOpenEdit} open={open} />
    </div>
  );
}

export default PopupMenu;
