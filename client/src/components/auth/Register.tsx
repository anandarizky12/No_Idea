import { useState, useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { register } from "../../actions/user";
import { AlertComponents } from "../alert/Alert";
import { getCookie } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";

function Register() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const isLog = getCookie("token");
  const [alert, setAlert] = useState({ message: "", typeAlert: "" });
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    no_induk: "",
  });

  const onFinishFailed = (errorInfo: any): void => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLog) {
      navigate("/");
    }
  }, [isLog]);

  const handleSubmit = (): void => {
    Dispatch(register(state, setAlert));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
      className=""
    >
      <Card
        title="Please Register Down Below"
        bordered={true}
        style={{ width: 400 }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              name="name"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>
          <Form.Item
            label="Nomor Induk"
            name="no_induk"
            rules={[{ required: true, message: "Please input your No!" }]}
          >
            <Input
              name="no_induk"
              type="number"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            label="No Telp"
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              name="phone"
              type="number"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              name="email"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please choose your Role!" }]}
          >
            <Radio.Group
              name="role"
              onChange={(e) => handleChange(e, state, setState)}
              defaultValue="a"
            >
              <Radio.Button value="guru">Guru</Radio.Button>
              <Radio.Button value="siswa">Siswa</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Typography>
              Already Have an Account?{" "}
              <a onClick={() => navigate("/login")}>Click Here</a>
            </Typography>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {alert.message !== null ? (
        <AlertComponents setAlert={setAlert} alert={alert} />
      ) : null}
    </div>
  );
}

export default Register;
