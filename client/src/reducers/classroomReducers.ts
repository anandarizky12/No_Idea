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

export const deleteClassroom = (
  state = { isLoading: true, isError: false },
  action: any
) => {
  switch (action.type) {
    case actionTypes.DELETE_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.DELETE_CLASSROOM_FAILED:
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

export const editClassroom = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.EDIT_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.EDIT_CLASSROOM_FAILED:
      return {
        ...state,
        classroom: null,
        error: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export const getStudentsInClassroom = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS_IN_CLASSROOM:
      return {
        ...state,
        students: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_STUDENTS_IN_CLASSROOM_FAILED:
      return {
        ...state,
        students: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const getStudentClassroom = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_CLASSROOM:
      return {
        ...state,
        student: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_STUDENT_CLASSROOM_FAILED:
      return {
        ...state,
        student: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const joinClassroom = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.JOIN_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.JOIN_CLASSROOM_FAILED:
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
