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
      profile: getCookie("profile"),
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
      setCookie("profile", payload.profile);
      setCookie("email", payload.email);
      setCookie("name", payload.name);
      setCookie("role", payload.role);
      setCookie("id", payload.id);
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        id : action.payload.id,
        profile : action.payload.profile,
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
      removeCookie("profile");
      return {
        is_auth: false,
        name: null,
        email: null,
        token: null,
        id : null,
        role: null,
        profile: null,
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
      setCookie("is_auth", true);
      setCookie("profile", action.payload.profile);
      setCookie("email", action.payload.email);
      setCookie("name", action.payload.name);
      setCookie("role", action.payload.role);
      setCookie("id", action.payload.id);
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


export const admin_login = (state = initialState, action: any) => {
  let payload: any = action.payload;
  let authObj: any;

  switch (action.type) {
    case actionTypes.ADMIN_LOGIN_USER:
      setCookie("name", payload.name);
      return {
        ...state,
      };
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      setCookie("is_auth", true);
      setCookie("profile", payload.profile);
      setCookie("email", payload.email);
      setCookie("name", payload.name);
      setCookie("role", payload.role);
      setCookie("id", payload.id);
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        id : action.payload.id,
        profile : action.payload.profile,
        email: action.payload.email,
      };

    case actionTypes.ADMIN_LOGIN_FAILED:
      authObj = {
        ...state,
        is_auth: false,
      };
      return state;
    case actionTypes.ADMIN_LOGOUT_USER:
      removeCookie("auth");
      return {
        ...state,
      };
    case actionTypes.ADMIN_LOGOUT_SUCCESS:
      removeCookie("is_auth");
      removeCookie("email");
      removeCookie("name");
      removeCookie("role");
      removeCookie("id");
      removeCookie("profile");
      return {
        is_auth: false,
        name: null,
        email: null,
        token: null,
        id : null,
        role: null,
        profile: null,
      };

    case actionTypes.ADMIN_LOGOUT_FAILED:
      return {
        ...state,
      };
    case actionTypes.ADMIN_SET_TOKEN:
      authObj = {
        ...state,
        token: payload,
      };
      setCookie("admin_token", payload);
      return authObj;
    default:
      return state;
  }
};




export const getAllUsers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_ALL_USERS_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}



export const editUserReducers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_ALL_USERS_FAILED:
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}


export const getUserById = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_USER_BY_ID:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_USER_BY_ID_FAILED:
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}