import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RadioChangeEvent, DatePickerProps } from "antd";
import { Button, Input, Spin, Form, DatePicker, Radio } from "antd";
import { editProfile, getUser } from "../../actions/user";
import ImageChange from "./ImageChange";
import { handleChange } from "../../utils/utils";
import { AlertComponents } from "../alert/Alert";
import moment from "moment";

function Profile() {
  const [alert, setAlert] = React.useState({ message: "", typeAlert: "" });
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.user);
  const { detail_user } = useSelector((state: any) => state.getUser);
  const [state, setState] = React.useState<any>({
    name: user.name,
    email: user.email,
    profile: null,
  });

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  const onChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    setState({ ...state, jk: value });
  };
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setState({ ...state, birth_date: dateString });
  };
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
          window.alert(error);
        };
        return;
      }

      dispatch(editProfile(state, setAlert, setLoading));
    } catch (err: any) {
      window.alert(err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center mt-10">
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
      {detail_user ? (
        <div className="w-3/6 border border-gray-200 mt-10 p-4">
          {loading ? (
            <div className="flex flex-col justify-center items-center w-full">
              <Spin />
              <p className="text-primary mt-2">
                Please Wait Uploading Image...
              </p>
            </div>
          ) : (
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              // initialValues={{ disabled: componentDisabled }}
              // onValuesChange={onFormLayoutChange}
              // disabled={componentDisabled}
            >
              <Form.Item label="Name">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={user.name}
                  placeholder="Nama"
                  name="name"
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={user.email}
                  placeholder="Email"
                  name="email"
                />
              </Form.Item>
              <Form.Item label="Phone">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={detail_user.phone}
                  placeholder="Phone"
                  name="phone"
                />
              </Form.Item>
              <Form.Item label="Tempat Lahir">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={
                    detail_user.place_of_birth
                      ? detail_user.place_of_birth
                      : null
                  }
                  placeholder="Tempat Lahir"
                  name="place_of_birth"
                />
              </Form.Item>
              <Form.Item label="Agama">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={
                    detail_user.religion ? detail_user.religion : null
                  }
                  placeholder="Agama"
                  name="religion"
                />
              </Form.Item>
              <Form.Item label="Alamat">
                <Input
                  onChange={(e) => handleChange(e, state, setState)}
                  defaultValue={
                    detail_user.address ? detail_user.address : null
                  }
                  placeholder="Alamat"
                  name="address"
                />
              </Form.Item>
              <Form.Item label="Jenis Kelamin">
                <Radio.Group
                  onChange={onChangeRadio}
                  defaultValue={detail_user.jk ? detail_user.jk : null}
                >
                  <Radio value="Laki-Laki"> Laki - Laki </Radio>
                  <Radio value="Perempuan"> Perempuan </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Tanggal Lahir">
                <DatePicker
                  defaultValue={
                    detail_user.birth_date &&
                    moment(detail_user.birth_date, "YYYY/MM/DD")
                  }
                  name="birth_date"
                  onChange={onChangeDate}
                />
              </Form.Item>

              <Button
                onClick={handleEdit}
                className="mt-2 float-right"
                color="secondary"
              >
                Simpan
              </Button>
            </Form>
          )}
        </div>
      ) : (
        <Spin />
      )}

      {alert.message !== null ? (
        <AlertComponents setAlert={setAlert} alert={alert} />
      ) : null}
    </div>
  );
}

export default Profile;
