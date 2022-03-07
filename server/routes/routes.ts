const { Register, Login, readAllUsers } = require("../controller/user");
const {
  createClassroom,
  joinClassroom,
  getClassByUserId,
  getStudentsInClassroom,
  getTaskInClassroom,
} = require("../controller/classroom");
const { authenticate, authTeacher } = require("../middleware/authorization");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.post("/createclassroom", authTeacher, createClassroom);
router.post("/joinclassroom", authenticate, joinClassroom);
router.get("/getalltaskinclass/:id", authenticate, getTaskInClassroom);

router.get("/getclassroombystudentid/:id", authenticate, getClassByUserId);
router.get("/getstudentsinclass/:id", authenticate, getStudentsInClassroom);

router.get("/getallusers", authenticate, readAllUsers);
module.exports = router;
