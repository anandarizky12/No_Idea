import * as actionTypes from "../actions/actions_type/actions_type_classroom";

export const getClassroomByTeacherIdReducers = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CLASSROOM_TEACHER:
      return {
        ...state,
        classroom: action.payload,
        isLoading: false,
        isError: true,
      };
    case actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED:
      return {
        ...state,
        classroom: null,
        error: action.payload,
        isLoading: false,
        isError: true,
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

export const getClassroom = (
  state = { isLoading: true, classroom: null },
  action: any
) => {
  switch (action.type) {
    case actionTypes.GET_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_CLASSROOM_FAILED:
      return {
        ...state,
        classroom: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};