const { Register, Login, readAllUsers } = require("../controller/user");
const { createClassroom, joinClassroom } = require("../controller/classroom");
const { authenticate, authTeacher } = require("../middleware/authorization");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.post("/createclassroom", authTeacher, createClassroom);
router.post("/joinclassroom", authenticate, createClassroom);
router.get("/getallusers", authenticate, readAllUsers);
module.exports = router;
