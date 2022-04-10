export {};

const jwt = require("jsonwebtoken");
const { User, Classroom, Student_Classroom } = require("../models");

//make sure the user is authenticated to acces specific routes
exports.authenticate = async (req: any, res: any, next: any) => {
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

exports.isMemberOfClass = async (req: any, res: any, next: any) => {
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

    const isInClass = await Student_Classroom.findOne({
      where: {
        student_id: decoded.id,
        classroom_id: req.params.id,
      },
    });

    if (!isInClass)
      return res
        .status(400)
        .send({ status: 400, message: "You are not a member of this class" });

    next();
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};

exports.isTeacherOfClass = async (req: any, res: any, next: any) => {
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

    const isTeacher = await Classroom.findOne({
      where: {
        teacher_id: decoded.id,
        id: req.params.id,
      },
    });

    if (!isTeacher)
      return res.status(400).send({
        status: 400,
        message: "Sorry, You are not a teacher of this class",
      });
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};

exports.isTeacherOrMemberOfClass = async (req: any, res: any, next: any) => {
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

    const isTeacher = await Classroom.findOne({
      where: {
        teacher_id: decoded.id,
        id: req.params.id,
      },
    });

    if (isTeacher) {
      next();
    } else {
      const isInClass = await Student_Classroom.findOne({
        where: {
          student_id: decoded.id,
          classroom_id: req.params.id,
        },
      });

      if (!isInClass)
        return res
          .status(400)
          .send({ status: 400, message: "You are not a member of this class" });
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};
