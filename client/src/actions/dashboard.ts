import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_dashboard";
import { getCookie } from "../utils/utils";
import { Dispatch } from "redux";

export const getDataDashboard = () => {
    return async (dispatch: Dispatch) => {
        const token = getCookie("admin_token");
    
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
    
        try {
          await axios
    
            .get(`${process.env.REACT_APP_HOST}/api/getalltotal`, config)
            .then((res) => {
              dispatch({
                type: actionTypes.GET_DATA_DASHBOARD,
                payload: res.data,
                isLoading: false,
                isError: false,
              });
            })
            .catch((err) => {
              if(!err.response){
               return dispatch({
                  type: actionTypes.GET_DATA_DASHBOARD_FAILED,
                  payload: err,
                  isLoading: false,
                  isError: true,
                })
              }
              dispatch({
                type: actionTypes.GET_DATA_DASHBOARD_FAILED,
                payload: err.response,
                isLoading: false,
                isError: true,
              });
            });
        } catch (err: any) {
          dispatch({
            type: actionTypes.GET_DATA_DASHBOARD_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        
        }
      };
    };
