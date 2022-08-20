import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../actions/user";
import { getCookie } from "../../utils/utils";
import { AlertComponents } from "../alert/Alert";
import { Typography } from "antd";

export default function AdminLogin() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = getCookie("admin_token");
  const role = getCookie("role");

  const [alert, setAlert] = React.useState({ message: "", typeAlert: 0 });

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token && role == "admin") navigate("/admin");
  }, [token]);

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(adminLogin(state.email, state.password, setAlert));
  };
  return (
    <div className="flex items-center h-screen bg-gray-200">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
              <div className="mt-6">
                <div className="text-center">
                  <h6 className="text-gray-500 text-2xl font-light">Welcome</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-400 text-center mb-3 font-bold">
                  <p className="text-xl font-light">Login</p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-400 text-xs font-light mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={state.email}
                      onChange={(e) => handleInput(e)}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-400 text-xs font-light  mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={state.password}
                      onChange={(e) => handleInput(e)}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white font-light active:bg-gray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Login
                      {/* {loading ? <ButtonLoader /> : "Login"} */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {alert.message !== null ? (
              <AlertComponents alert={alert} setAlert={setAlert} />
            ) : null}
          </div>
        </div>
      </div>
      <Typography className="absolute bottom-5 left-5">
        Login{" "}
        <a className="font-bold" onClick={() => navigate("/login")}>
          User
        </a>
      </Typography>
    </div>
  );
}
