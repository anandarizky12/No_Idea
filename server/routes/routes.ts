const { Register, Login, readAllUsers } = require("../controller/user");
const { createClassroom } = require("../controller/classroom");
const { authenticate, authTeacher } = require("../middleware/authorization");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.get("/createclassroom", authTeacher, createClassroom);
router.get("/getallusers", authenticate, readAllUsers);
module.exports = router;
