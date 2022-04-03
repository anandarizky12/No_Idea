import { setCookie, removeCookie, getCookie } from "../utils/utils";
import * as actionTypes from "../actions/actions_type/actions_type_user";

let initialState: any;

if (typeof localStorage !== "undefined") {
  const authCookie = getCookie("token");
  if (authCookie) {
    initialState = {
      is_auth: getCookie("is_auth"),
      name: getCookie("name"),
      role: getCookie("role"),
      email: getCookie("email"),
      id: getCookie("id"),
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

export const user = (state = initialState, action: any) => {
  let payload: any = action.payload;
  let authObj: any;

  switch (action.type) {
    case actionTypes.LOGIN_USER:
      setCookie("name", payload.name);
      return {
        ...state,
      };
    case actionTypes.LOGIN_SUCCESS:
      setCookie("is_auth", true);
      setCookie("email", payload.email);
      setCookie("name", payload.name);
      setCookie("role", payload.role);
      setCookie("id", payload.id);
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
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
      removeCookie("name");
      removeCookie("role");
      removeCookie("id");
      return {
        is_auth: false,
        name: null,
        email: null,
        token: null,
        role: null,
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

export const getUser = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        detail_user: action.payload,
        isError: false,
        isLoading: false,
        error: null,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editProfile = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE:
      return {
        ...state,
        detail_user: action.payload,
        isError: false,
        isLoading: false,
        error: null,
      };
    case actionTypes.EDIT_PROFILE_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
