const {
  Register,
  Login,
  readAllUsers,
  readUser,
  editProfile,
  AdminLogin,
  EditUser,
  getUserById,
  DeleteUser,
  AddUser
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
  getTaskAndQuestionInClassroom ,
  getAllClassroom,
  addMateri,
  getAllMateri,
  getMateri,
  deleteMateri,
  editMateri,
  getYourScore,
  getAllScoreInApp,
  statusClassroom,
  getAllClassroomByTeacherId 
} = require("../controller/classroom");
const {
  authenticate,
  authTeacher,
  isMemberOfClass,
  isTeacherOfClass,
  isTeacherOrMemberOfClass,
  isAdmin
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
  getUnfinishedTask,
  getAllTaskScore,
  getScoreDetailTask,
  editScore,
  getMapel,
  getAllQuestions 
} = require("../controller/task");



const {
  getAllTotal
} = require("../controller/dashboard");


const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/admin_login", AdminLogin);
router.delete('/deleteuser/:id', isAdmin, DeleteUser)
router.post('/adduser', isAdmin, AddUser)

router.patch("/editprofile", authenticate, editProfile);
router.patch("/edituser/:id", isAdmin, EditUser);

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
  "/getallquestion",
  authTeacher,
  getAllQuestions 
);

router.get(
  "/getalltaskandquestioninclass/:id",
  isTeacherOrMemberOfClass,
  getTaskAndQuestionInClassroom 
)
router.get("/getclassroom/:id", isTeacherOrMemberOfClass, getClassroom);
router.get("/getallclassroom", isAdmin, getAllClassroom)
router.get(
  "/getclassroombyteacherid/:id",
  authTeacher,
  getClassroomByTeacherId
);
router.get(
  "/getallclassroombyteacherid/:id",
  authTeacher,
  getAllClassroomByTeacherId 
);



router.patch("/editclassroom/:id", isTeacherOfClass, editClassroom);
router.patch('/statusclassroom/:id', isTeacherOfClass, statusClassroom)
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
router.get("/getyourscore", authenticate, getYourScore)

router.get("/getallusers", isAdmin, readAllUsers);
router.get("/getuser", authenticate, readUser);
router.get("/getuserbyid/:id", authenticate, getUserById);
//task
router.get("/gettask/:id", authenticate, getTaskAndQuestion);
router.get("/getallscore/:id", isTeacherOfClass, getAllScore);
router.get("/getdetailtask/:task_id/:id", isTeacherOrMemberOfClass , getDetailTask )
router.get("/getscoredetailtask/:user_id/:task_id/:id", isTeacherOfClass , getScoreDetailTask )
router.put("/editquestion/:id", editQuestion)
router.get("/finishedtask", authenticate ,getFinishedTask)
router.get('/unfinishedtask', authenticate, getUnfinishedTask)


router.get('/getmapel', getMapel)
router.get('/getalltotal', isAdmin, getAllTotal);
router.post('/createmateri/:id',isTeacherOfClass, addMateri)
router.get('/materi/:id', isTeacherOrMemberOfClass, getMateri)
router.get('/allmateri/:id', isTeacherOrMemberOfClass, getAllMateri)
router.patch('/updatemateri/:id',isTeacherOfClass, editMateri)
router.delete('/deletemateri/:id',isTeacherOfClass, deleteMateri)
router.patch('/editscore/:id/:task_id/:score_id/:student_id',isTeacherOfClass, editScore)


//get all score 
router.get('/getallscore', isAdmin, getAllScoreInApp)
router.get('/getalltaskscore/:id', authenticate, getAllTaskScore)
module.exports = router;
