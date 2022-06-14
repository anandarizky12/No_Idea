const {
  Register,
  Login,
  readAllUsers,
  readUser,
  editProfile,
} = require("../controller/user");
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
  searchClassroom,
  getTaskAndQuestionInClassroom 
} = require("../controller/classroom");
const {
  authenticate,
  authTeacher,
  isMemberOfClass,
  isTeacherOfClass,
  isTeacherOrMemberOfClass,
} = require("../middleware/authorization");
const {
  createTask,
  deleteTask,
  editTask,
  getTask,
  getAllScore,
  getTaskAndQuestion,
  getDetailTask,
  editQuestion,
  getFinishedTask,
  getUnfinishedTask
} = require("../controller/task");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);
router.patch("/editprofile", authenticate, editProfile);
router.post("/createclassroom", authTeacher, createClassroom);

router.post("/joinclassroom", authenticate, joinClassroom);

router.post("/createtask/:id", authTeacher, createTask);
router.delete("/deletetask/:id", authTeacher, deleteTask);
router.put("/edittask/:id", authTeacher, editTask);
//require class id
router.get(
  "/getalltaskinclass/:id",
  isTeacherOrMemberOfClass,
  getTaskAndQuestionInClassroom 
);

router.get(
  "/getalltaskandquestioninclass/:id",
  isTeacherOrMemberOfClass,
  getTaskAndQuestionInClassroom 
)
router.get("/getclassroom/:id", isTeacherOrMemberOfClass, getClassroom);
router.get(
  "/getclassroombyteacherid/:id",
  authTeacher,
  getClassroomByTeacherId
);
router.patch("/editclassroom/:id", isTeacherOfClass, editClassroom);
router.delete("/deleteclassroom/:id", isTeacherOfClass, deleteClassroom);

//require student id
router.get("/getstudentclassroom", authenticate, getClassByUserId);
router.get("/search/:id", authenticate, searchClassroom);
//require class id
router.get(
  "/getstudentsinclass/:id",
  isTeacherOrMemberOfClass,
  getStudentsInClassroom
);

router.get("/getallusers", authenticate, readAllUsers);
router.get("/getuser", authenticate, readUser);
//task
router.get("/gettask/:id", authenticate, getTaskAndQuestion);
router.get("/getallscore/:id", isTeacherOfClass, getAllScore);
router.get("/getdetailtask/:task_id/:id", isTeacherOrMemberOfClass , getDetailTask )
router.put("/editquestion/:id", isTeacherOfClass, editQuestion)
router.get("/finishedtask", authenticate ,getFinishedTask)
router.get('/unfinishedtask', authenticate, getUnfinishedTask)
module.exports = router;
