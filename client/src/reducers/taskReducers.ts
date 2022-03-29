import * as actionTypes from "../actions/actions_type/actions_type_task";

export const getTaskInClassroom = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TASK_IN_CLASS:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_ALL_TASK_IN_CLASS_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const createTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.CREATE_TASK_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const editTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.EDIT_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.EDIT_TASK_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const deleteTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.DELETE_TASK_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const getTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_TASK_FAILED:
      return {
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
