import * as actionTypes from "../actions/actions_type/actions_type_classroom";

export const getClassroomByTeacherIdReducers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CLASSROOM_TEACHER:
      return {
        ...state,
        classroom: action.payload,
      };
    case actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED:
      return {
        ...state,
        classroom: action.payload,
      };
    default:
      return state;
  }
};

export const createClassroomReducers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
      };
    case actionTypes.CREATE_CLASSROOM_FAILED:
      return {
        ...state,
        classroom: action.payload,
      };
    default:
      return state;
  }
};
