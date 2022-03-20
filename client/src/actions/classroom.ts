import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_classroom";
import { getCookie, removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

export const getClassroomByTeacherId = (id: string) => {
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

        .get(`http://localhost:5000/api/getclassroombyteacherid/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_ALL_CLASSROOM_TEACHER,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      dispatch({
        type: actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED,
        payload: err,
      });
      console.log(err);
    }
  };
};

export const createClassroom = (data: any) => {
  const { name, description, teacher_id, banner } = data;
  console.log(data);
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
        .post(
          "http://localhost:5000/api/createclassroom",
          { name, description, teacher_id, banner },
          config
        )
        .then((res) => {
          dispatch({
            type: actionTypes.CREATE_CLASSROOM,
            payload: res.data,
          });
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.CREATE_CLASSROOM_FAILED,
        payload: err,
      });
      console.log(err.response.data.message);
    }
  };
};
