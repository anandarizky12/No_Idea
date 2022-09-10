import { useState, useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { handleChange } from "../../utils/utils";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
import { AlertComponents } from "../alert/Alert";
import { getCookie } from "../../utils/utils";
import useWindowDimension from "../hook/useWindowDimension";
import bg from "./images/school.jpg";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ message: "", typeAlert: 0 });
  const isLog = getCookie("token");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLog) {
      navigate("/");
    }
  }, [isLog, navigate]);

  const handleSubmit = (): void => {
    dispatch(login(state.email, state.password, setAlert));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        padding: `${useWindowDimension() > 400 ? "0px" : "0px"}`,
        paddingLeft: `${useWindowDimension() > 400 ? "70px" : "10px"}`,
        justifyContent: "space-between",
      }}
    >
      <Card style={{ width: 600, background: "none", border: "none" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <div className="flex mb-8 ">
            <div className="ml-2 flex flex-col">
              <h1 className="p-0 m-0 text-xl font-semibold text-primary">
                Aplikasi Penilaian Otomatis SMKN 1 Sukamara
              </h1>
              <h1 className="p-0 m-0 text-3xl md:text-4xl font-bold">
                Silahkan Login Dibawah<span>.</span>
              </h1>
            </div>
          </div>
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
              onChange={(e) => handleChange(e, state, setState)}
              style={{
                borderRadius: "30px",
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            // wrapperCol={{ offset: 8, span: 16 }}
          >
            <Typography>
              Belum Punya Akun Siswa?{" "}
              <p className="font-bold" onClick={() => navigate("/register")}>
                Klik Disini
              </p>
            </Typography>
          </Form.Item>

          <Form.Item>
            <Button shape="round" size="large" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {alert.message !== null ? (
        <AlertComponents alert={alert} setAlert={setAlert} />
      ) : null}
      <div
        className="w-3/6 hidden lg:block"
        style={{
          minHeight: "640px",
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "center",
          filter: "grayscale(1)",
        }}
      ></div>
    </div>
  );
}

export default Login;
