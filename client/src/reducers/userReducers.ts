import { setCookie, removeCookie, getCookie } from "../utils/utils";
import * as actionTypes from "../actions/actions_type/actions_type_user";

let initialState: any;

if (typeof localStorage !== "undefined") {
  const authCookie = getCookie("token");
  if (authCookie) {
    initialState = {
      is_auth: getCookie("is_auth"),
      username: getCookie("username"),
      email: getCookie("email"),
    };
  } else {
    initialState = {
      is_auth: false,
      detail_user: {},
      token: null,
    };
  }
} else {
  initialState = {
    is_auth: false,
    detail_user: {},
    token: null,
  };
}

const user = (state = initialState, action: any) => {
  let payload: any = action.payload;
  let authObj: any;

  switch (action.type) {
    case actionTypes.LOGIN_USER:
      setCookie("username", payload.username);
      return {
        ...state,
      };
    case actionTypes.LOGIN_SUCCESS:
      setCookie("is_auth", true);
      setCookie("email", payload.email);
      setCookie("username", payload.username);
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };

    case actionTypes.LOGIN_FAILED:
      authObj = {
        ...state,
        is_auth: false,
      };
      return state;
    case actionTypes.LOGOUT_USER:
      removeCookie("auth");
      return {
        ...state,
      };
    case actionTypes.LOGOUT_SUCCESS:
      removeCookie("is_auth");
      removeCookie("email");
      removeCookie("username");
      return {
        is_auth: false,
        username: null,
        email: null,
        token: null,
      };

    case actionTypes.LOGOUT_FAILED:
      return {
        ...state,
      };
    case actionTypes.SET_TOKEN:
      authObj = {
        ...state,
        token: payload,
      };
      setCookie("token", payload);
      return authObj;
    default:
      return state;
  }
};

export default user;
