import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_user";
import { removeCookie } from "../utils/utils";
import { ActionCreator, Dispatch } from "redux";

//make function to login and dispatch action
export const login =
  (email: string, password: string, setAlert: any) =>
  async (dispatch: Dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((res) => {
          const { username, email, token } = res.data.data;

          console.log(res.data.data);
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              username,
              email,
            },
          });

          dispatch({
            type: actionTypes.LOGIN_USER,
            payload: {
              username,
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

export const register = (username: String, email: String, password: String) => {
  axios
    .post("http://localhost:5000/api/register", {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
