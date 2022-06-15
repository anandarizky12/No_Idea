import * as actionTypes from "../actions/actions_type/actions_type_dashboard";

export const getdashboardReducers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_DATA_DASHBOARD:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    case actionTypes.GET_DATA_DASHBOARD_FAILED:
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
};
