import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user, getUser, editProfile } from "../reducers/userReducers";
import {
  getClassroomByTeacherIdReducers,
  createClassroomReducers,
  getClassroom,
  deleteClassroom,
  editClassroom,
  getStudentsInClassroom,
  getStudentClassroom,
  joinClassroom,
} from "../reducers/classroomReducers";
import {
  getTaskInClassroom,
  createTask,
  deleteTask,
  editTask,
  getTask,
} from "../reducers/taskReducers";
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
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
