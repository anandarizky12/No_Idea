import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_user";
import { removeCookie } from "../utils/utils";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
//make function to login and dispatch action

interface IBasicState {
  property: any;
}

interface IActions {
  LOGIN_SUCCESS: string;
}
interface ILoginSuccess {
  type: IActions["LOGIN_SUCCESS"];
  payload: {
    user: any;
  };
}

export const login: ActionCreator<
  ThunkAction<Promise<any>, IBasicState, null, ILoginSuccess>
> = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((res) => {
          const { user } = res.data;

          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              user,
            },
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (err: any) {
      console.log(err);
    }
  };
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
