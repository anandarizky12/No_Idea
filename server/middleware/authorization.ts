export {};

const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

//make sure the user is authenticated to acces specific routes
exports.authenticate = async ({ req, res, next }: any) => {
  let header, token;
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.split(" ")[1])
  ) {
    return res.status(401).send({
      status: 401,
      message: "Access Denied",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error: any) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

exports.authTeacher = async (req: any, res: any, next: any) => {
  let header, token;
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.split(" ")[1])
  )
    return res.status(401).send({
      error: { message: "Access denied" },
    });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { id: decoded.id } });

    if (user.role !== "guru")
      return res
        .status(400)
        .send({ status: 400, message: "invalid operation" });
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};
