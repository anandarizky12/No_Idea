import { Modal, Spin, Button } from "antd";
import React, { useRef } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { AlertComponents } from "../alert/Alert";
import ImageChange from "./ImageChange";
import { editProfile } from "../../actions/user";
import { handleChange } from "../../utils/utils";

export const EditProfile = () => {
  const [visible, setVisible] = React.useState(false);
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.user);
  const [state, setState] = React.useState<any>({
    name: user.name,
    email: user.email,
    profile: null,
  });

  const dispatch = useDispatch();

  const handleEdit = () => {
    try {
      if (state.profile) {
        const reader = new FileReader();
        reader.readAsDataURL(state.profile);

        reader.onloadend = () => {
          // setState({ ...state, profile: reader.result });
          state.profile = reader.result;
          dispatch(editProfile(state, setAlert, setLoading));
        };
        reader.onerror = (error) => {
          console.log("Error: ", error);
        };
        return;
      }

      dispatch(editProfile(state, setAlert, setLoading));
    } catch (err: any) {
      console.log(err);
      setVisible(false);
    }
  };

  return (
    <>
      <Tooltip placement="bottom" title="Edit Profile">
        <Button
          // icon={<SettingOutlined className="text-xl" />}
          type="text"
          shape="round"
          style={{
            color: "#fff",
          }}
          icon={<SettingOutlined />}
          onClick={() => setVisible(true)}
        ></Button>
      </Tooltip>

      <Modal
        title="Edit Profile"
        centered
        visible={visible}
        onOk={() => handleEdit()}
        onCancel={() => setVisible(false)}
        width="400px"
      >
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <div className="flex flex-col justify-center items-center w-full">
              <Spin />
              <p className="text-gray-500 mt-2">
                Please Wait Uploading Image...
              </p>
            </div>
          ) : (
            <>
              <ImageChange state={user} setSelectedImg={setState} />
              <Input
                onChange={(e) => handleChange(e, state, setState)}
                defaultValue={user.name}
                placeholder="Nama"
                name="name"
              />
              <Input
                onChange={(e) => handleChange(e, state, setState)}
                defaultValue={user.email}
                style={{ marginTop: 10 }}
                placeholder="Email"
                name="email"
              />
            </>
          )}

          {/* <Input
            defaultValue={user.phone}
            style={{ marginTop: 10 }}
            placeholder="Nomor Telepon"
          /> */}
          {alert.message !== null ? (
            <AlertComponents setAlert={setAlert} alert={alert} />
          ) : null}
        </div>
      </Modal>
    </>
  );
};
