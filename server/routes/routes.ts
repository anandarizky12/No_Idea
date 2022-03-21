const { Register, Login, readAllUsers } = require("../controller/user");
const {
  createClassroom,
  joinClassroom,
  getClassByUserId,
  getStudentsInClassroom,
  getTaskInClassroom,
  deleteClassroom,
  getClassroomByTeacherId,
  getClassroom,
  editClassroom,
} = require("../controller/classroom");
const {
  authenticate,
  authTeacher,
  isMemberOfClass,
  isTeacherOfClass,
  isTeacherOrMemberOfClass,
} = require("../middleware/authorization");
const { createTask, deleteTask, editTask } = require("../controller/task");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.post("/createclassroom", authTeacher, createClassroom);

router.post("/joinclassroom", authenticate, joinClassroom);

router.post("/createtask", authTeacher, createTask);
router.delete("/deletetask/:id", authTeacher, deleteTask);
router.put("/edittask/:id", authTeacher, editTask);
//require class id
router.get("/getalltaskinclass/:id", isMemberOfClass, getTaskInClassroom);
router.get("/getclassroom/:id", isTeacherOrMemberOfClass, getClassroom);
router.get(
  "/getclassroombyteacherid/:id",
  authTeacher,
  getClassroomByTeacherId
);
router.patch("/editclassroom/:id", isTeacherOfClass, editClassroom);
router.delete("/deleteclassroom/:id", isTeacherOfClass, deleteClassroom);

//require student id
router.get("/getclassroombystudentid/:id", authenticate, getClassByUserId);

//require class id
router.get("/getstudentsinclass/:id", authenticate, getStudentsInClassroom);

router.get("/getallusers", authenticate, readAllUsers);
module.exports = router;
