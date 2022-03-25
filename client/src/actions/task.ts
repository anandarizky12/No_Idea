import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_task";
import { getCookie } from "../utils/utils";
import { Dispatch } from "redux";

export const getTaskInClassroom = (id: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios
        .get(`http://localhost:5000/api/getalltaskinclass/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_ALL_TASK_IN_CLASS,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: actionTypes.GET_ALL_TASK_IN_CLASS_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      console.log(err);
      dispatch({
        type: actionTypes.GET_ALL_TASK_IN_CLASS_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};

export const createTask = (data: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios
        .post("http://localhost:5000/api/createtask", data, config)
        .then((res) => {
          dispatch({
            type: actionTypes.CREATE_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          alert("Create Task Success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: actionTypes.CREATE_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          window.location.reload();
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.CREATE_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};

export const editTask = (data: any, id: string) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(data);

    try {
      await axios
        .put(`http://localhost:5000/api/edittask/${id}`, data, config)
        .then((res) => {
          dispatch({
            type: actionTypes.EDIT_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          alert("Edit task success");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: actionTypes.EDIT_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.EDIT_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};

export const deleteTask = (id: string) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios
        .delete(`http://localhost:5000/api/deletetask/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.DELETE_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          alert("Delete task success");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: actionTypes.DELETE_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.DELETE_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};