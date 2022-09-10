import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_user";
import { getCookie, removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

//make function to login and dispatch action
export const login = (email: string, password: string, setAlert: any) =>
  async (dispatch: Dispatch) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_HOST}/api/login`, { email, password })
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
  const { name, email, password, phone } = state;

  try {
    await axios
      .post(`${process.env.REACT_APP_HOST}/api/register`, {
        name,
        email,
        password,
        phone,
       
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

 
export const addUser = (state: any, setAlert : any, setState : any, form : any) => {
  return async (dispatch: any) => {
    const token = getCookie("admin_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { name, email, password, role, phone , jk} = state;
  
  try {
    await axios
      .post(`${process.env.REACT_APP_HOST}/api/adduser`, {
        name,
        email,
        password,
        phone,
        role,
        jk
      }, config)
      .then(() => {
        setAlert({
          message : "Success Add User",
          typeAlert : 1
        })

        setState({ 
          name: null,
          email: "",
          role: null,
          phone: 0,
          jk: null,
          password: null,})
          form.resetFields();
      }).then(()=>{
        dispatch(getAllUsers())
      })
      .catch((err) => {
        if(!err.response){
          setAlert({
            message : "server error",
            typeAlet : 4
          })
          return;
        }
        setAlert({
          message : err.response.data.message,
          typeAlert : 4
        })
       
      });
  } catch (err: any) {
      setAlert({
        message : err.message,
        typeAlert : 4
      })
  }
};
}

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

export const logoutAdmin = (): void => {
  removeCookie("name");
  removeCookie("email");
  removeCookie("admin_token");
  removeCookie("is_auth");
  removeCookie("role");
  removeCookie("id");
  removeCookie("profile");
  window.location.href = "/admin/login";
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
      .get(`${process.env.REACT_APP_HOST}/api/getuser`, config)
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
        .patch(`${process.env.REACT_APP_HOST}/api/editprofile`, data, config)
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


export const editProfileAdmin = (data: any, setAlert: any, setLoading: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("admin_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      await axios
        .patch(`${process.env.REACT_APP_HOST}/api/editprofile`, data, config)
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



export const adminLogin = (email: string, password: string, setAlert: any) =>
  async (dispatch: Dispatch) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_HOST}/api/admin_login`, { email, password })
        .then((res) => {

          const { name, email, role, token, id, profile } = res.data.data;

          dispatch({
            type: actionTypes.ADMIN_LOGIN_SUCCESS,
            payload: {
              name,
              role,
              email,
              id,
              profile,
            },
          });

          dispatch({
            type: actionTypes.ADMIN_LOGIN_USER,
            payload: {
              name,
            },
          });

          dispatch({
            type: actionTypes.ADMIN_SET_TOKEN,
            payload: token,
          });

          setAlert({ message: "Succesfully Login", typeAlert: 1 });

        })
        .catch((err) => {
          if(!err.response){
            setAlert({ message: "Server Error", typeAlert: 4 });
            return;
          }
          console.log(err.response.data)
          setAlert({ message: err.response.data.message, typeAlert: 4 });
        });
        
    }catch (err: any) {
   
      setAlert({ message: err.message, typeAlert: 4 });
    }
  }


export const getAllUsers = () => async (dispatch: Dispatch) => {
  const token = getCookie("admin_token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios
      .get(`${process.env.REACT_APP_HOST}/api/getallusers`, config)
      .then((res) => {
     
          dispatch({
            type: actionTypes.GET_ALL_USERS,
            payload: res.data.data,
            isLoading: false,
            isError: false,
          })
   
      })
      .catch((err) => {
        if(!err.response){
          return dispatch({
            type: actionTypes.GET_ALL_USERS_FAILED,
            payload: err,
            isLoading: false,
            isError: true,
          });
        }
        dispatch({
          type: actionTypes.GET_ALL_USERS_FAILED,
          payload: {
            res: err.response.data,
            isLoading: false,
            isError: true,
          
          },
        });
       
      });
  } catch (err: any) {
    
    dispatch({
      type: actionTypes.GET_ALL_USERS_FAILED,
      payload: {
        res: err.response.data,
        isLoading: false,
        isError: true,
      },
    });
  }
}



export const editUser = (data: any, id : any, setAlert : any) => {
  return async (dispatch: any) => {
    const token = getCookie("admin_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios
        .patch(`${process.env.REACT_APP_HOST}/api/edituser/${id}`, data, config)
        .then((res) => {
      
          dispatch({
            type: actionTypes.EDIT_USER,
            payload: res.data.data,
          });
          dispatch({
            type: actionTypes.GET_ALL_USERS,
            payload: null,
            isLoading: false,
            isError: false,
          });
          setAlert({
            message : "Succes Edit User",
            typeAlert : 1
          })
        
        }).then(()=>{
            dispatch(getAllUsers())          
        })
        .catch((err) => {
            if(!err.response){
              setAlert({
                message : "Error server, Please try again later",
                typeAlert : 4
              })
            
              return dispatch({
                    type: actionTypes.EDIT_USER_FAILED,
                    payload: err,
                    isLoading: false,
                    isError: true,
                });
            }
            dispatch({
              type: actionTypes.EDIT_USER_FAILED,
              payload: err.response,
              isLoading: false,
              isError: true,
            });
            setAlert({
              message :err.response.data.message,
              typeAlert : 4
            })
            return
        });
    } catch (err: any) {
          dispatch({
            type: actionTypes.EDIT_USER_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          setAlert({
            message :err.response.data.message,
            typeAlert : 4
          })
          return
    }
  };
};





export const getUserById = (id : string | undefined, setLoading :any) => {
  return async (dispatch: Dispatch) => {
    const admin_token = getCookie("admin_token");
    const token = getCookie('token');
   
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${admin_token ? admin_token : token}`,
      },
    };
    setLoading(true);
    try {
    
      await axios
        .get(`${process.env.REACT_APP_HOST}/api/getuserbyid/${id}`, config)
        .then((res) => {
         
          dispatch({
            type: actionTypes.GET_USER_BY_ID,
            payload: res.data.data,
          });
          setLoading(false)
     
        })
        .catch((err) => {
            setLoading(false)
            if(!err.response){
              return dispatch({
                    type: actionTypes.GET_USER_BY_ID_FAILED,
                    payload: err,
                    isLoading: false,
                    isError: true,
                });
          }
     
          dispatch({
            type: actionTypes.GET_USER_BY_ID_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });

       
        });
    } catch (err: any) {  
      setLoading(false)
      dispatch({
        type: actionTypes.GET_USER_BY_ID_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};






export const deleteUser = (id : string, setAlert : any, setRows : any , rows : any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("admin_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if(!window.confirm("Are you sure to delete this user?")){
      return;
    }
    try {  
      await axios
        .delete(`${process.env.REACT_APP_HOST}/api/deleteuser/${id}`, config)
        .then((res) => {
      
          dispatch({
            type: actionTypes.DELETE_USER,
            payload: res.data.data,
          });
         
          setAlert({
            message : "Succesfully delete user",
            typeAlert : 1
          })
        }).then(()=>{
          let deletedRows = [...rows].filter((data)=>{
           return data.id !== id
          })
          setRows(deletedRows)

        })
        .catch((err) => {
            if(!err.response){
              setAlert({
                message : "Server Error",
                typeAlert : 4
              })
             
              return dispatch({
                    type: actionTypes.DELETE_USER_FAILED,
                    payload: err,
                    isLoading: false,
                    isError: true,
                });
          }
          dispatch({
            type: actionTypes.DELETE_USER_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          setAlert({
            message : err.response.data.message,
            typeAlert : 4
          })
       
       
        });
    } catch (err: any) {
  
      dispatch({
        type: actionTypes.DELETE_USER_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });

      setAlert({
        message : err.response.data.message,
        typeAlert : 4
      })
    }
  }

}