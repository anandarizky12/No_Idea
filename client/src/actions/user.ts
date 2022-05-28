import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_user";
import { getCookie, removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

//make function to login and dispatch action
export const login = (email: string, password: string, setAlert: any) =>
  async (dispatch: Dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((res) => {

          const { name, email, role, token, id, profile } = res.data.data;

          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              name,
              role,
              email,
              id,
              profile,
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
          if(!err.response){
            setAlert({ message: "Server Error", typeAlert: 4 });
            return;
          }
          setAlert({ message: err.response.data.message, typeAlert: 4 });
        });
        
    }catch (err: any) {
      console.log(err);
      setAlert({ message: err.message, typeAlert: 4 });
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
        if(!err.response){
          setAlert({ message: "Server Error", typeAlert: 4 });
          return;
        }
        setAlert({ message: err.response.data.message, typeAlert: 4 });
      });
  } catch (err: any) {
    setAlert({ message: err.message, typeAlert: 4 });
   
  }
};

export const logout = (): void => {
  removeCookie("name");
  removeCookie("email");
  removeCookie("token");
  removeCookie("is_auth");
  removeCookie("role");
  removeCookie("id");
  removeCookie("profile");
  window.location.href = "/login";
};

export const getUser = () => async (dispatch: Dispatch) => {
  const token = getCookie("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios
      .get("http://localhost:5000/api/getuser", config)
      .then((res) => {
        dispatch({
          type: actionTypes.GET_USER,
          payload: res.data.data,
          isLoading: false,
          isError: false,
        });
      })
      .catch((err) => {
        if(!err.response){
          return dispatch({
            type: actionTypes.GET_USER_FAIL,
            payload: err,
            isLoading: false,
            isError: true,
          });
        }
        dispatch({
          type: actionTypes.GET_USER_FAIL,
          payload: {
            res: err.response.data,
            isLoading: false,
            isError: true,
          
          },
        });
       
      });
  } catch (err: any) {
    
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      payload: {
        res: err.response.data,
        isLoading: false,
        isError: true,
      },
    });
  }
};

export const editProfile = (data: any, setAlert: any, setLoading: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      await axios
        .patch("http://localhost:5000/api/editprofile", data, config)
        .then((res) => {
          setLoading(false);

          dispatch({
            type: actionTypes.EDIT_PROFILE,
            payload: res.data.data,
          });

          setAlert({
            message: "Succesfully Edit Profile",
            typeAlert: 1,
          });
          window.location.reload();
        })
        .catch((err) => {
            if(!err.response){
              setLoading(false)
              return dispatch({
                    type: actionTypes.EDIT_PROFILE_FAILED,
                    payload: err,
                    isLoading: false,
                    isError: true,
                });
          }
          setLoading(false);
  
          dispatch({
            type: actionTypes.EDIT_PROFILE_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });

          setAlert({ message: err.response.data.message, typeAlert: 4 });
        });
    } catch (err: any) {
      setLoading(false);
    
      dispatch({
        type: actionTypes.EDIT_PROFILE_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });

      setAlert({ message: err.response.data.message, typeAlert: 4 });
    }
  };
};
