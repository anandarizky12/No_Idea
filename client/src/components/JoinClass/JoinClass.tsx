import { Modal, Button, Spin } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { joinClassroom } from "../../actions/classroom";
export const JoinClass = () => {
  const dispatch = useDispatch();
  const JoinClass = useSelector((state: any) => state.JoinClassroom);
  const [visible, setVisible] = React.useState(false);
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    dispatch(joinClassroom(code));
  }, []);

  console.log(JoinClass);
  return (
    <>
      <Tooltip placement="bottom" title="Gabung Kelas">
        <PlusOutlined
          onClick={() => setVisible(true)}
          className="text-xl text-gray-400 hover:cursor-pointer mr-7"
        />
      </Tooltip>

      <Modal
        title="Gabung Kelas"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p className="text-gray-500 text-base">
          Minta Kode Kelas Kepada Guru Untuk Gabung Ke dalam Kelas
        </p>
        <Input
          onChange={(e) => setCode(e.target.name)}
          placeholder="Masukan kode kelas di sini"
          size="large"
        />
        <div className="w-full text-center">
          <Spin size="large" />
        </div>
      </Modal>
    </>
  );
};
