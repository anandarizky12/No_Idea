import { setCookie, removeCookie, getCookie } from "../utils/utils";
import * as actionTypes from "../actions/actions_type/actions_type_user";

let initialState: any;

if (typeof localStorage !== "undefined") {
  const authCookie = getCookie("auth");
  if (authCookie) {
    initialState = authCookie;
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

      return null;
    case actionTypes.LOGIN_SUCCESS:
      setCookie("is_auth", true);
      setCookie("email", payload.email);
      setCookie("username", payload.username);
      return null;

    case actionTypes.LOGIN_FAILED:
      authObj = {
        ...state,
        is_auth: false,
      };

      return authObj;
    case actionTypes.LOGOUT_USER:
      removeCookie("auth");
      return {
        ...state,
        detail_user: {},
      };
    case actionTypes.LOGOUT_SUCCESS:
      removeCookie("is_auth");
      removeCookie("email");
      removeCookie("username");
      return null;

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
      return null;
    default:
      return state;
  }
};

export default user;
