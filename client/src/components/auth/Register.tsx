import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { register } from "../../actions/user";
import { AlertComponents } from "../alert/Alert";
import { getCookie } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function Register() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const isLog = getCookie("token");
  const [alert, setAlert] = useState({ message: null, typeAlert: null });
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLog) {
      navigate("/");
    }
  }, [isLog]);

  const handleSubmit = (e: any) => {
    Dispatch(register(state.username, state.email, state.password, setAlert));
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
          onFinish={(e) => handleSubmit(e)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="Username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              name="username"
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Typography>
              Already Have an Account? <a href="/login">Click Here</a>
            </Typography>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {alert.message !== null ? <AlertComponents alert={alert} /> : null}
    </div>
  );
}

export default Register;
