import { Modal, Spin, Button } from "antd";
import React, { useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { AlertComponents } from "../alert/Alert";
import ImageChange from "./ImageChange";

export const EditProfile = () => {
  const [visible, setVisible] = React.useState(false);
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });

  const dispatch = useDispatch();

  return (
    <>
      <Tooltip placement="bottom" title="Gabung Kelas">
        <Button
          // icon={<SettingOutlined className="text-xl" />}
          type="primary"
          shape="round"
          onClick={() => setVisible(true)}
        >
          Edit Profile
        </Button>
      </Tooltip>

      <Modal
        title="Edit Profile"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <ImageChange />
          <Input placeholder="Nama" />
          <Input style={{ marginTop: 10 }} placeholder="Email" />
          <Input style={{ marginTop: 10 }} placeholder="Nomor Telepon" />
        </div>
      </Modal>

      {alert.message !== null ? <AlertComponents alert={alert} /> : null}
    </>
  );
};
