import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_classroom";
import { getCookie, removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

export const getClassroomByTeacherId = (id: string) => {
  return async (dispatch: Dispatch) => {
    console.log("id", id);
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
      console.log(err);
    }
  };
};
