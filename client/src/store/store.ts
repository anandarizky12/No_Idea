import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user, getUser } from "../reducers/userReducers";
import {
  getClassroomByTeacherIdReducers,
  createClassroomReducers,
  getClassroom,
  deleteClassroom,
  editClassroom,
  getStudentsInClassroom,
  getStudentClassroom,
} from "../reducers/classroomReducers";
import {
  getTaskInClassroom,
  createTask,
  deleteTask,
  editTask,
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
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
