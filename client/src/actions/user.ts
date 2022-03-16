import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_user";
import { removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

//make function to login and dispatch action
export const login =
  (email: string, password: string, setAlert: any) =>
  async (dispatch: Dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((res) => {
          const { name, email, role, token } = res.data.data;
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              name,
              role,
              email,
            },
          });

          dispatch({
            type: actionTypes.LOGIN_USER,
            payload: {
              name,
            },
          });
          dispatch({
            type: actionTypes.SET_TOKEN,
            payload: token,
          });
          setAlert({ message: "Succesfully Login", typeAlert: 1 });
        })
        .catch((err) => {
          console.log(err);
          setAlert({ message: err.response.data.message, typeAlert: 4 });
        });
    } catch (err: any) {
      setAlert({ message: err.message, typeAlert: 4 });
      console.log(err);
    }
  };

export const register = (state: any, setAlert: any) => async () => {
  const { name, email, password, no_induk, role, phone } = state;

  try {
    await axios
      .post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        no_induk,
        phone,
        role,
      })
      .then((res) => {
        setAlert({
          message: "Succesfully Registered Account",
          typeAlert: 1,
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
      })
      .catch((err) => {
        console.log(err.response.data);
        setAlert({ message: err.response.data.message, typeAlert: 4 });
      });
  } catch (err: any) {
    setAlert({ message: err.message, typeAlert: 4 });
    console.log(err);
  }
};

export const logout = (): void => {
  removeCookie("name");
  removeCookie("email");
  removeCookie("token");
  removeCookie("is_auth");
  window.location.href = "/login";
};
