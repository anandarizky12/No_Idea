const { Register, Login, readAllUsers } = require("../controller/user");
const { authenticate } = require("../middleware/authorization");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.get("/getallusers", authenticate, readAllUsers);
module.exports = router;
