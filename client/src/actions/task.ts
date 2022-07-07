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
          
          if(!err.response){
          
           return  dispatch({
              type: actionTypes.GET_ALL_TASK_IN_CLASS_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
          }

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

export const createTask = (data: any, question : any, id : any,) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { title, description, other, user_id, deadline, mapel_id} = data 


    try {
      await axios
        .post(`http://localhost:5000/api/createtask/${id}`, {title, description, other, user_id, deadline, question, mapel_id }, config)
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
         
          alert(err.response.data.message)
          dispatch({
            type: actionTypes.CREATE_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          // window.location.reload();
        });
    } catch (err: any) {
      alert(err.response.data.message)
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
          alert(err.response.data.message);
          dispatch({
            type: actionTypes.EDIT_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      alert(err.response.data.message)
      dispatch({
        type: actionTypes.EDIT_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};

export const editQuestion = (data: any, id: string) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
      try{
        await axios
        .put(`http://localhost:5000/api/editquestion/${id}`, data, config)
        .then((res) => {
          dispatch({
            type: actionTypes.EDIT_QUESTION,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          alert("Edit question success");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          alert(err.response.data.message);
          dispatch({
            type: actionTypes.EDIT_QUESTION_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
      }catch(err : any ){
        alert(err.response.data.message)
        dispatch({
          type: actionTypes.EDIT_QUESTION_FAILED,
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

// export const getTask = (id: any, class_id: any) => {
//   return async (dispatch: Dispatch) => {
//     const token = getCookie("token");
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//         // classroom_id: class_id,
//         // any: class_id,
//       },
//     };

//     try {
//       await axios
//         .get(
//           `http://localhost:5000/api/gettask/${id}?class=${class_id}`,
//           config
//         )
//         .then((res) => {
//           dispatch({
//             type: actionTypes.GET_TASK,
//             payload: res.data,
//             isLoading: false,
//             isError: false,
//           });
//         })
//         .catch((err) => {
//           dispatch({
//             type: actionTypes.GET_TASK_FAILED,
//             payload: err.response,
//             isLoading: false,
//             isError: true,
//           });
         
//           alert(err.response.data.message);
//         });
//     } catch (err: any) {
//       dispatch({
//         type: actionTypes.GET_TASK_FAILED,
//         payload: err.response,
//         isLoading: false,
//         isError: true,
//       });
//       alert(err.response.data.message);
//     }
//   };
// };

export const getAllScores = (class_id: any) => {
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
        .get(`http://localhost:5000/api/getallscore/${class_id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_ALL_SCORES,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err: any) => {
          if(!err.response){
           return dispatch({
              type: actionTypes.GET_ALL_SCORES_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            })
          }
          dispatch({
            type: actionTypes.GET_ALL_SCORES_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_ALL_SCORES_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  };
};

interface Idata {
  answer : string,
  id : string | undefined,
  user_id : string | undefined,
  class_id : string | undefined,
}

export const AnswerTask = (data : Idata ) =>{

  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { answer , id, class_id, user_id  } = data;
  

    try{
     
      await axios
        .post(`http://localhost:8000/api/answer_tasks?task_id=${id}&student_id=${user_id}&classroom_id=${class_id}`, { answer } ,config)
        .then((res)=>{
          dispatch({
            type: actionTypes.ANSWER_TASK,
            payload: res,
            isLoading: false,
            isError: false,
          });
          window.location.reload();
        })
        .catch((err : any)=>{
          if (!err.response){
            return alert("Sorry Server is busy now")
         
          }
        
          alert(err.response.data.message); 
          dispatch({
            type: actionTypes.ANSWER_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        }
        );
    }catch(err : any){
      alert(err.response.data.message);
      dispatch({
        type: actionTypes.ANSWER_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      }); 
    }
  }
}
  


export const getTask= (task_id: any, id: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // classroom_id: class_id,
        // any: class_id,
      },
    };

    try {
      await axios
        .get(
          `http://localhost:5000/api/getdetailtask/${task_id}/${id}`,
          config
        )
        .then((res) => {
          dispatch({
            type: actionTypes.GET_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
            return dispatch({
              type: actionTypes.GET_TASK_FAILED,
              payload: err,
              isLoading : false,
              isError : true
            })
        }
          dispatch({
            type: actionTypes.GET_TASK_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          console.log(err.response);
          alert(err.response.data.message);
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
      alert(err.response.data.message);
    }
  };
};


export const getDetailScoreStudent= (task_id: any, id: any, user_id : string | undefined) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // classroom_id: class_id,
        // any: class_id,
      },
    };

    try {
      await axios
        .get(
          `http://localhost:5000/api/getscoredetailtask/${user_id}/${task_id}/${id}`,
          config
        )
        .then((res) => {
      
          dispatch({
            type: actionTypes.GET_DETAIL_SCORE_STUDENT,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
            return dispatch({
              type: actionTypes.GET_DETAIL_SCORE_STUDENT_FAILED,
              payload: err,
              isLoading : false,
              isError : true
            })
        }
          dispatch({
            type: actionTypes.GET_DETAIL_SCORE_STUDENT_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          console.log(err.response);
          alert(err.response.data.message);
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_DETAIL_SCORE_STUDENT_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
      alert(err.response.data.message);
    }
  };
};


export const getUnfinishedTasks = () => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.get(`http://localhost:5000/api/unfinishedtask`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_UNFINISHED_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        }).catch((err: any) => {
         
            return dispatch({
              type: actionTypes.GET_UNFINISHED_TASK_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
       
      })
    }catch(err: any) {

      dispatch({
        type: actionTypes.GET_UNFINISHED_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  }
}



export const getFinishedTasks = () => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.get(`http://localhost:5000/api/finishedtask`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_FINISHED_TASK,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        }).catch((err: any) => {
         
            return dispatch({
              type: actionTypes.GET_FINISHED_TASK_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
       
      })
    }catch(err: any) {

      dispatch({
        type: actionTypes.GET_FINISHED_TASK_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  }
};



// http://localhost:5000/api/getalltaskscore/3

export const getAllTasksScore = (id : string | undefined)=>{
  return async (dispatch : Dispatch)=>{
    const token = getCookie("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    try {
      await axios.get(`http://localhost:5000/api/getalltaskscore/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_ALL_TASK_SCORE,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        }).catch((err: any) => {
         
            return dispatch({
              type: actionTypes.GET_ALL_TASK_SCORE_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
       
      })
    }catch(err: any) {

      dispatch({
        type: actionTypes.GET_ALL_TASK_SCORE_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  }
}


export const editScore = (score: number, id: string, task_id : string, score_id : string) => {
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
      // http://localhost:5000/api/editscore/3/11/41
        .patch(`http://localhost:5000/api/editscore/${id}/${task_id}/${score_id}`, {score : score}, config)
        .then((res) => {
       
          alert("Edit Score success");
          window.location.reload();
       
        })
        .catch((err) => {
          alert(err.response.data.message);
        
        });
    } catch (err: any) {
    
      alert(err.response.data.message)
    
    }
  };
};