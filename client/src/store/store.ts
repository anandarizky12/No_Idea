import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user, getUser, editProfile, admin_login, getAllUsers,editUserReducers, getUserById} from "../reducers/userReducers";
import {
  getClassroomByTeacherIdReducers,
  createClassroomReducers,
  getClassroom,
  deleteClassroom,
  editClassroom,
  getStudentsInClassroom,
  getStudentClassroom,
  joinClassroom,
  getAllMateri 
} from "../reducers/classroomReducers";
import {
  getTaskInClassroom,
  createTask,
  deleteTask,
  editTask,
  getTask,
  getAllScores,
  AnswerTask,
  editQuestion,
  getFinishedTask,
  getUnfinishedTask
} from "../reducers/taskReducers";

import {
  getdashboardReducers
} from "../reducers/dashboardReducers";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user,
  getClassroomByTeacherIdReducers,
  createClassroomReducers,
  getClassroom,
  deleteClassroom,
  editClassroom,
  getTaskInClassroom,
  createTask,
  deleteTask,
  editTask,
  getUser,
  getStudentsInClassroom,
  getStudentClassroom,
  getTask,
  joinClassroom,
  editProfile,
  getAllScores,
  AnswerTask,
  editQuestion,
  getFinishedTask,
  getUnfinishedTask,
  admin_login,
  getdashboardReducers,
  getAllUsers,
  editUserReducers,
  getUserById,
  getAllMateri 
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
