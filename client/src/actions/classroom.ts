import axios from "axios";
import * as actionTypes from "./actions_type/actions_type_classroom";
import { getCookie, removeCookie } from "../utils/utils";
import { Dispatch } from "redux";

export const getClassroomByTeacherId = (id: any) => {
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
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
           return dispatch({
              type: actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            })
          }
          dispatch({
            type: actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_ALL_CLASSROOM_TEACHER_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
      
    }
  };
};

export const getAllClassroomByTeacherId = (id: any) => {
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

        .get(`http://localhost:5000/api/getallclassroombyteacherid/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_WHOLE_CLASSROOM_TEACHER,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
           return dispatch({
              type: actionTypes.GET_WHOLE_CLASSROOM_TEACHER_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            })
          }
          dispatch({
            type: actionTypes.GET_WHOLE_CLASSROOM_TEACHER_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_WHOLE_CLASSROOM_TEACHER_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
      
    }
  };
};


export const createClassroom = (data: any) => {
  const { name, description, teacher_id, banner } = data;

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
          alert("Create classroom success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.data.message);
          alert(err.response.data.message);
          dispatch({
            type: actionTypes.CREATE_CLASSROOM_FAILED,
            payload: err,
          });
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

export const editClassroom = (data: any) => {
  const { name, description, banner, id } = data;

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
        .patch(
          `http://localhost:5000/api/editclassroom/${id}`,
          { name, description, banner },
          config
        )
        .then((res) => {
          dispatch({
            type: actionTypes.EDIT_CLASSROOM,
            payload: res.data,
          });
          alert("Edit classroom success");
          window.location.reload();
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.EDIT_CLASSROOM_FAILED,
            payload: err,
          });
          alert(err.response.data.message);
         
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.EDIT_CLASSROOM_FAILED,
        payload: err,
      });
      alert(err.response.data.message);
     
    }
  };
};


export const editStatusClassroom = (data: any) => {
  const { status, id } = data;

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
        .patch(
          `http://localhost:5000/api/statusclassroom/${id}`,
          {status},
          config
        )
        .then((res) => {
          dispatch({
            type: actionTypes.EDIT_STATUS_CLASSROOM,
            payload: res.data,
          });
          alert("Success");
          window.location.reload();
        })
      .catch((err) => {
          console.log(err)
          dispatch({
            type: actionTypes.EDIT_STATUS_CLASSROOM_FAILED,
            payload: err,
          });
       
         
        });
    } catch (err: any) {
      console.log(err)
      dispatch({
        type: actionTypes.EDIT_STATUS_CLASSROOM_FAILED,
        payload: err,
      });
    
     
    }
  };
};


export const getClassroom = (id: any) => {
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
        .get(`http://localhost:5000/api/getclassroom/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_CLASSROOM,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
            return  dispatch({
              type: actionTypes.GET_CLASSROOM_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
          }
          dispatch({
            type: actionTypes.GET_CLASSROOM_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err : any) {
      dispatch({
        type: actionTypes.GET_CLASSROOM_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    
    }
  };
};

export const deleteClassroom = (id: any) => {
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
        .delete(`http://localhost:5000/api/deleteclassroom/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.DELETE_CLASSROOM,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          alert("Kelas berhasil dihapus");

          window.location.reload();
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.DELETE_CLASSROOM_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          alert(err.response.data.message);
        });
    } catch (err : any) {
      dispatch({
        type: actionTypes.DELETE_CLASSROOM_FAILED,
        payload: err,
        isLoading: false,
        isError: true,
      });
      alert(err.response.data.message);
    }
  };
};

export const getStudentsinClassroom = (id: any) => {
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
        .get(`http://localhost:5000/api/getstudentsinclass/${id}`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_STUDENTS_IN_CLASSROOM,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          if(!err.response){
            return dispatch({
              type: actionTypes.GET_STUDENTS_IN_CLASSROOM_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
          }
        
          dispatch({
            type: actionTypes.GET_STUDENTS_IN_CLASSROOM_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_STUDENTS_IN_CLASSROOM_FAILED,
        payload: err,
        isLoading: false,
        isError: true,
      });
      console.log(err.response);
    }
  };
};

export const getStudentClassroom = () => {
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
        .get(`http://localhost:5000/api/getstudentclassroom`, config)
        .then((res) => {
          dispatch({
            type: actionTypes.GET_STUDENT_CLASSROOM,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err: any) => {
          if(!err.response){
            return dispatch({
              type: actionTypes.GET_STUDENT_CLASSROOM_FAILED,
              payload: err,
              isLoading: false,
              isError: true,
            });
          }
          dispatch({
            type: actionTypes.GET_STUDENT_CLASSROOM_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.GET_STUDENT_CLASSROOM_FAILED,
        payload: err,
        isLoading: false,
        isError: true,
      });
      console.log(err.response);
    }
  };
};

export const joinClassroom = (code: any, setAlert: any, setLoading: any) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const config = {
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
   
    setLoading(true);

    try {
      await axios
        .post(`http://localhost:5000/api/joinclassroom`, { code: code }, config)
        .then((res) => {
          dispatch({
            type: actionTypes.JOIN_CLASSROOM,
            payload: res.data,
            isLoading: false,
            isError: false,
          });
          setAlert({ message: res.data.message, typeAlert: 1 });
          setLoading(false);
          window.location.reload();
        })
        .catch((err) => {
          setAlert({ message: err.response.data.message, typeAlert: 4 });
          dispatch({
            type: actionTypes.JOIN_CLASSROOM_FAILED,
            payload: err.response,
            isLoading: false,
            isError: true,
          });
          setLoading(false);
        });
    } catch (err: any) {
      dispatch({
        type: actionTypes.JOIN_CLASSROOM_FAILED,
        payload: err,
        isLoading: false,
        isError: true,
      });
      setLoading(false);
      setAlert({ message: err.response.data.message, typeAlert: 4 });
      
    }
  };
};

export const createMateri = (data : any) =>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type" : "application/json",
        Authorization :  `Bearer ${token}`
      }
    }
  

  const { title, description, file, classroom_id } = data;
  
  try{

    await axios.post(`http://localhost:5000/api/createmateri/${classroom_id}`, {title, description, file}, config)
    .then((res)=>{
      dispatch({
        type : actionTypes.CREATE_MATERI,
        payload : res.data,
        isLoading : false ,
        isError : false 
      })
      alert("Create Materi Success");
      window.location.reload()
    }).catch((err : any )=>{
      console.log(err)
      alert(err.response.data.message);
      dispatch({
        type : actionTypes.CREATE_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
    })

  }catch(err : any){
    console.log(err)
      alert(err.response.data.message)
      dispatch({
        type : actionTypes.CREATE_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
  }
}
};


export const editMateri = (id : string, data : any) =>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type" : "application/json",
        Authorization :  `Bearer ${token}`
      }
    }
  const { title, description, file } = data;  
  try{

    await axios.patch(`http://localhost:5000/api/editmateri/${id}`, {title, description, file}, config)
    .then((res)=>{
      dispatch({
        type : actionTypes.EDIT_MATERI,
        payload : res.data,
        isLoading : false ,
        isError : false 
      })
      alert("EDIT Materi Success");
      window.location.reload()
    }).catch((err : any )=>{
      alert(err.response.data.message);
      dispatch({
        type : actionTypes.EDIT_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
    })

  }catch(err : any){
      alert(err.response.data.message)
      dispatch({
        type : actionTypes.EDIT_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
  }
}
};

export const deleteMateri = (id : string) =>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type" : "application/json",
        Authorization :  `Bearer ${token}`
      }
    }

  try{

    await axios.delete(`http://localhost:5000/api/deletemateri/${id}`, config)
    .then((res)=>{
      dispatch({
        type : actionTypes.DELETE_MATERI,
        payload : res.data,
        isLoading : false ,
        isError : false 
      })
      alert("DELETE Materi Success");
      window.location.reload()
    }).catch((err : any )=>{
      alert(err.response.data.message);
      dispatch({
        type : actionTypes.DELETE_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
    })

  }catch(err : any){
      alert(err.response.data.message)
      dispatch({
        type : actionTypes.DELETE_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
  }
}
};

export const getAllMateri = (id : string | undefined) =>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type" : "application/json",
        Authorization :  `Bearer ${token}`
      }
    }
  try{

    await axios.get(`http://localhost:5000/api/allmateri/${id}`,  config)
    .then((res)=>{
      dispatch({
        type : actionTypes.GET_ALL_MATERI,
        payload : res.data,
        isLoading : false ,
        isError : false 
      })
   
    
    }).catch((err : any )=>{
  
      dispatch({
        type : actionTypes.GET_ALL_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
    })

  }catch(err : any){
 
      dispatch({
        type : actionTypes.GET_ALL_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
  }
}
};


export const getMateri = (id : string) =>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type" : "application/json",
        Authorization :  `Bearer ${token}`
      }
    }
  try{

    await axios.get(`http://localhost:5000/api/materi/${id}`, config)
    .then((res)=>{
      dispatch({
        type : actionTypes.GET_MATERI,
        payload : res.data,
        isLoading : false ,
        isError : false 
      })
      
    }).catch((err : any )=>{
      
      dispatch({
        type : actionTypes.GET_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
    })

  }catch(err : any){
    
      dispatch({
        type : actionTypes.GET_MATERI_FAILED,
        payload : err.response,
        isLoading : false,
        isError : true
      })
  }
}
};

export const getYourScore = ()=>{
  return async (dispatch : Dispatch) =>{
    const token = getCookie("token");
    const config = {
      headers : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
    try{
      await axios
              .get('http://localhost:5000/api/getyourscore', config)
              .then((res) => {
              
                dispatch({
                  type: actionTypes.GET_YOUR_SCORE,
                  payload: res.data,
                  isLoading: false,
                  isError: false,
                });
              })
              .catch((err : any) => {
                dispatch({
                  type: actionTypes.GET_YOUR_SCORE_FAILED,
                  payload: err.response,
                  isLoading: false,
                  isError: true,
                });
              });
    }catch(err : any){
      dispatch({
        type: actionTypes.GET_YOUR_SCORE_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  }
}


export const getAllScoreInApp = () => {
  return async (dispatch : Dispatch) =>{
    const token = getCookie("admin_token");
    const config = {
      headers : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
    try{
      await axios
              .get('http://localhost:5000/api/getallscore', config)
              .then((res) => {
              
                dispatch({
                  type: actionTypes.GET_ALL_SCORE_IN_APP,
                  payload: res.data,
                  isLoading: false,
                  isError: false,
                });
              })
              .catch((err : any) => {
                dispatch({
                  type: actionTypes.GET_ALL_SCORE_IN_APP_FAILED,
                  payload: err.response,
                  isLoading: false,
                  isError: true,
                });
              });
    }catch(err : any){
      dispatch({
        type: actionTypes.GET_ALL_SCORE_IN_APP_FAILED,
        payload: err.response,
        isLoading: false,
        isError: true,
      });
    }
  }
}

// export const joinClassroom = (code: any) => {
//   return async (dispatch: Dispatch) => {
//     const token = getCookie("token");
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       await axios
//         .post(`http://localhost:5000/api/joinclassroom/${code}`, config)
//         .then((res) => {
//           dispatch({
//             type: actionTypes.JOIN_CLASSROOM,
//             payload: res.data,
//             isLoading: false,
//             isError: false,
//           });
//           alert("Kelas berhasil diikuti");
//           window.location.reload();
//         })
//         .catch((err) => {
//           console.log(err.response);
//           dispatch({
//             type: actionTypes.JOIN_CLASSROOM_FAILED,
//             payload: err.response,
//             isLoading: false,
//             isError: true,
//           });
//         });
//     } catch (err: any) {
//       dispatch({
//         type: actionTypes.JOIN_CLASSROOM_FAILED,
//         payload: err,
//         isLoading: false,
//         isError: true,
//       });
//       console.log(err.response);
//     }
//   };
// };
