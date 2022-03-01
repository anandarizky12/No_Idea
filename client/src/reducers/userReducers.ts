import { setCookie, removeCookie, getCookie } from "../utils/utils";
import * as actionTypes from "../actions/actions_type/actions_type_user";

let initialState: any;
const authCookie = getCookie("auth");
if (authCookie) {
  initialState = JSON.parse(authCookie);
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
      authObj = {
        ...state,
        is_auth: true,
        detail_user: payload.user,
        // token: payload.token,
      };
      setCookie("auth", authObj);
      return authObj;
    case actionTypes.LOGIN_SUCCESS:
      authObj = {
        ...state,
        is_auth: true,
      };
      setCookie("auth", authObj);
      return authObj;

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
      removeCookie("auth");
      return {
        ...state,
        is_auth: false,
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
      setCookie("auth", authObj);
      return authObj;
    default:
      return state;
  }
};

export default user;
