import { Modal, Spin, Button } from "antd";
import React, { useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { AlertComponents } from "../alert/Alert";
import ImageChange from "./ImageChange";
import { editProfile } from "../../actions/user";

export const EditProfile = () => {
  const [visible, setVisible] = React.useState(false);
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });
  const user = useSelector((state: any) => state.user);
  const [state, setState] = React.useState<any>({
    name: user.name,
    email: user.email,
    profile: "",
  });

  const dispatch = useDispatch();

  const handleEdit = () => {
    try {
      if (state.profile) {
        const reader = new FileReader();
        reader.readAsDataURL(state.profile);

        return (reader.onloadend = () => {
          // setState({ ...state, profile: reader.result });
          state.profile = reader.result;
          dispatch(editProfile(state, setAlert));

          setVisible(false);
        });

        reader.onerror = () => {
          console.error("AHHHHHHHH!!");
          setVisible(false);
        };
      }

      dispatch(editProfile(state, setAlert));
    } catch (err: any) {
      console.log(err);
      setVisible(false);
    }
  };

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
        onOk={() => handleEdit()}
        onCancel={() => setVisible(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <ImageChange state={state} setSelectedImg={setState} />
          <Input defaultValue={user.name} placeholder="Nama" />
          <Input
            defaultValue={user.email}
            style={{ marginTop: 10 }}
            placeholder="Email"
          />
          {/* <Input
            defaultValue={user.phone}
            style={{ marginTop: 10 }}
            placeholder="Nomor Telepon"
          /> */}
        </div>
      </Modal>

      {alert.message !== null ? <AlertComponents alert={alert} /> : null}
    </>
  );
};
