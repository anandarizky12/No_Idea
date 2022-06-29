import { useState, useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { register } from "../../actions/user";
import { AlertComponents } from "../alert/Alert";
import { getCookie } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import useWindowDimension from "../hook/useWindowDimension";
import bg from "./images/school.jpg";

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
        margin: "0px",
        padding: `${useWindowDimension() > 400 ? "0px" : "0px"}`,
        paddingLeft: `${useWindowDimension() > 400 ? "100px" : "10px"}`,
      }}
    >
      <Card style={{ width: 600, border: "none" }}>
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
            Silahkan Daftar Pada Form Di Bawah<span>.</span>
          </h1>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Masukan Nama Anda!" }]}
          >
            <Input
              name="name"
              placeholder="Nama"
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
            rules={[{ required: true, message: "Masukan Nomor Telepon!" }]}
          >
            <Input
              name="phone"
              placeholder="Nomor Telepon"
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
            rules={[{ required: true, message: "Masukan Email Andal!" }]}
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
            rules={[{ required: true, message: "Masukan Kata Sandi!" }]}
          >
            <Input.Password
              name="password"
              placeholder="Kata Sandi"
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
              Sudah Punya Akun ?{" "}
              <a className="font-bold" onClick={() => navigate("/login")}>
                Klik Disini
              </a>
            </Typography>
          </Form.Item>

          <Form.Item>
            <Button type="primary" shape="round" size="large" htmlType="submit">
              Daftar
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <div
        className="w-3/6 h-screen absolute right-0"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "center",
          filter: "grayscale(1)",
        }}
      />
      {alert.message !== null ? (
        <AlertComponents setAlert={setAlert} alert={alert} />
      ) : null}
    </div>
  );
}

export default Register;
