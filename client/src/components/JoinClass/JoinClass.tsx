import { Modal, Spin } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { joinClassroom } from "../../actions/classroom";
import { AlertComponents } from "../alert/Alert";
export const JoinClass = () => {
  const dispatch = useDispatch();
  const JoinClass = useSelector((state: any) => state.joinClassroom);
  const [visible, setVisible] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });
  const [loading, setLoading] = React.useState(false);
  const handleOk = () => {
    dispatch(joinClassroom(code, setAlert, setLoading));
    setVisible(false);
  };

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
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        {!loading ? (
          <>
            <p className="text-gray-500 text-base">
              Minta Kode Kelas Kepada Guru Untuk Gabung Ke dalam Kelas
            </p>
            <Input
              onChange={(e) => setCode(e.target.value)}
              placeholder="Masukan kode kelas di sini"
              size="large"
            />
          </>
        ) : (
          <div className="w-full text-center">
            <Spin size="large" />
          </div>
        )}
      </Modal>

      {alert.message !== null ? <AlertComponents alert={alert} /> : null}
    </>
  );
};
