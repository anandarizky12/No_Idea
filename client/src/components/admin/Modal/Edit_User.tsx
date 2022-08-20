import { Modal, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUserById } from "../../../actions/user";
import { Col, Form, Input, Row, Select } from "antd";
import { handleChange } from "../../../utils/utils";

const { Option } = Select;

const Edit_User = ({
  setIsModalVisible,
  isModalVisible,
  id,
  setAlert,
}: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.getUserById);

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(editUser(state, id, setAlert));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  React.useEffect(() => {
    dispatch(getUserById(id, setLoading));
  }, [id]);

  React.useEffect(() => {
    if (user.data) {
      setState({
        name: user.data.name,
        email: user.data.email,
        role: user.data.role,
        phone: user.data.phone,
        jk: user.data.jk,
      });
    }
  }, [user, id]);

  const [state, setState] = React.useState({
    name: null,
    email: "",
    role: null,
    phone: 0,
    jk: null,
  });

  return (
    <>
      <Modal
        title="Edit Pengguna"
        style={{ width: "100%" }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {state.name && user.data && !loading ? (
          <div className="w-full">
            <Form style={{ width: "100%" }} layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="name"
                    label="Name"
                    initialValue={state.name}
                    rules={[{ required: true, message: "Masukan Nama" }]}
                  >
                    <Input
                      onChange={(e) => handleChange(e, state, setState)}
                      name="name"
                      placeholder="Masukan Nama"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="email"
                    label="Email"
                    initialValue={state.email}
                    rules={[{ required: true, message: "example@mail.com" }]}
                  >
                    <Input
                      onChange={(e) => handleChange(e, state, setState)}
                      style={{ width: "100%" }}
                      name="email"
                      placeholder="example@mail.com"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    initialValue={state.phone}
                    rules={[
                      { required: true, message: "Masukan Nomor Telepon" },
                    ]}
                  >
                    <Input
                      onChange={(e) => handleChange(e, state, setState)}
                      style={{ width: "100%" }}
                      name="phone"
                      placeholder="Masukan Nomor Telepon"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="jk"
                    label="Jenis Kelamin"
                    rules={[{ required: true, message: "Pilih Jenis Kelamin" }]}
                  >
                    <Select
                      defaultValue={state.jk}
                      placeholder="Pilih Jenis Kelamin"
                      onChange={(e) => setState({ ...state, jk: e })}
                    >
                      <Option value="Laki-Laki">Laki - Laki</Option>
                      <Option value="Perempuan">Perempuan</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: "Pilih Role" }]}
                  >
                    <Select
                      onChange={(e) => setState({ ...state, role: e })}
                      defaultValue={state.role}
                      placeholder="Pilih Role"
                    >
                      <Option value="admin">Admin</Option>
                      <Option value="guru">Guru</Option>
                      <Option value="siswa">Siswa</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        ) : (
          <Spin size="large" />
        )}
      </Modal>
    </>
  );
};

export default Edit_User;
