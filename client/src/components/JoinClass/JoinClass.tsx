import { Modal, Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
export const JoinClass = () => {
  const [visible, setVisible] = React.useState(false);
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
        <Input placeholder="Masukan kode kelas di sini" size="large" />
      </Modal>
    </>
  );
};
