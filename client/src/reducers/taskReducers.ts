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

export const editQuestion = (state = {}, action : any ) =>{
  switch(action.type){
    case actionTypes.EDIT_QUESTION:
      return{
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.EDIT_QUESTION_FAILED:
      return{
        ...state,
        task: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

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

export const getAllScores = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SCORES:
      return {
        ...state,
        scores: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_ALL_SCORES_FAILED:
      return {
        ...state,
        scores: null,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};



export const AnswerTask = (state = {}, action: any) => {
  switch (action.type){
    case actionTypes.ANSWER_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.ANSWER_TASK_FAILED:
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
}

export const getUnfinishedTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_UNFINISHED_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_UNFINISHED_TASK_FAILED:
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
}


export const getFinishedTask = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET_FINISHED_TASK:
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_FINISHED_TASK_FAILED:
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
}

export const getAllTaskScore = (state = {}, action : any ) =>{
  switch (action.type){
    case actionTypes.GET_ALL_TASK_SCORE :
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_ALL_TASK_SCORE_FAILED :
      return {
        ...state, 
        task : action.payload,
        isLoading  : false,
        isError : false
      }
    default : 
    return state ;
    
  }
}



export const getDetailScoreStudent = (state = {}, action : any ) =>{
  switch (action.type){
    case actionTypes.GET_DETAIL_SCORE_STUDENT :
      return {
        ...state,
        task: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.GET_DETAIL_SCORE_STUDENT_FAILED :
      return {
        ...state, 
        task : action.payload,
        isLoading  : false,
        isError : false
      }
    default : 
    return state ;
    
  }
}