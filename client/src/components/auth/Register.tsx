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
import useWindowDimension from "../hook/useWindowDimension";

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
        padding: `${useWindowDimension() > 400 ? "80px" : "10px"}`,
      }}
    >
      <Card style={{ width: "600px", background: "none", border: "none" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Please Register Down Below<span>.</span>
          </h1>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              name="name"
              placeholder="Name"
              style={{
                borderRadius: "30px",
                padding: "10px",
                paddingLeft: "20px",
              }}
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              name="phone"
              placeholder="Phone Number"
              style={{
                borderRadius: "30px",
                padding: "10px",
                paddingLeft: "20px",
              }}
              type="number"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            name="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              name="email"
              placeholder="Email"
              style={{
                borderRadius: "30px",
                padding: "10px",
                paddingLeft: "20px",
              }}
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              placeholder="Password"
              style={{
                borderRadius: "30px",
                padding: "10px",
                paddingLeft: "20px",
              }}
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Typography>
              Already Have an Account ?{" "}
              <a className="font-bold" onClick={() => navigate("/login")}>
                Click Here
              </a>
            </Typography>
          </Form.Item>

          <Form.Item>
            <Button type="primary" shape="round" size="large" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* <img
        className="grayscale hidden lg:block"
        src={"/icons8-class-dojo-480.png"}
      ></img> */}
      {alert.message !== null ? (
        <AlertComponents setAlert={setAlert} alert={alert} />
      ) : null}
    </div>
  );
}

export default Register;
