import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AlertComponents } from "../../alert/Alert";
import ImageChange from "../../Profile/ImageChange";
import { Button, Input, Spin } from "antd";
import { editProfileAdmin } from "../../../actions/user";
import { handleChange } from "../../../utils/utils";

interface IProps {
  name: string;
  email: string;
  profile: any;
}
function AdminProfile() {
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.admin_login);
  const [state, setState] = React.useState<IProps>({
    name: user.name,
    email: user.email,
    profile: null,
  });
  const handleEdit = () => {
    try {
      if (state.profile) {
        const reader = new FileReader();
        reader.readAsDataURL(state.profile);

        reader.onloadend = () => {
          // setState({ ...state, profile: reader.result });
          state.profile = reader.result;
          dispatch(editProfileAdmin(state, setAlert, setLoading));
        };
        reader.onerror = (error) => {
          window.alert(error);
        };
        return;
      }

      dispatch(editProfileAdmin(state, setAlert, setLoading));
    } catch (err: any) {
      window.alert(err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center mt-28">
      <div className="border border-gray-200 flex p-5 rounded-md shadow-lg w-3/6">
        <ImageChange state={user} setSelectedImg={setState} />
        <div className="mt-5  ml-10">
          <h1 className="text-2xl font-bold text-gray-600">{user.name}</h1>
          <span className="bg-red-400 text-white p-1 text-xs rounded-sm">
            {user.role}
          </span>
          <h1 className="text-base text-gray-600 mt-3 ">{user.email}</h1>
        </div>
      </div>
      <div className="w-3/6 border border-gray-200 mt-10 p-4">
        {loading ? (
          <div className="flex flex-col justify-center items-center w-full">
            <Spin />
            <p className="text-primary mt-2">Please Wait Uploading Image...</p>
          </div>
        ) : (
          <>
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
            <Button
              onClick={handleEdit}
              className="mt-2 float-right"
              color="secondary"
            >
              Simpan
            </Button>
          </>
        )}
      </div>
      {alert.message !== null ? (
        <AlertComponents setAlert={setAlert} alert={alert} />
      ) : null}
    </div>
  );
}

export default AdminProfile;
