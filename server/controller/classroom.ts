export {};
const joi = require("@hapi/joi");
const { User, Classroom, Student_Classroom, Task } = require("../models");

exports.createClassroom = async (req: any, res: any) => {
  try {
    const { classcode, name, teacher_id } = req.body;

    const schema = joi.object({
      name: joi.string().min(3).required(),
      teacher_id: joi.number(),
      classcode: joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }
    const checkTeacherId = await User.findOne({
      where: {
        id: teacher_id,
      },
    });
    if (!checkTeacherId) {
      return res.status(500).send({
        status: 500,
        message: "Teacher Id not found",
      });
    }
    const classroom = await Classroom.create({
      classcode,
      name,
      teacher_id,
    });
    return res.status(201).send({
      status: 201,
      message: "Classroom created",
      data: classroom,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.joinClassroom = async (req: any, res: any) => {
  try {
    const { student_id, classroom_id, classcode } = req.body;

    const schema = joi.object({
      student_id: joi.number().required(),
      classroom_id: joi.number().required(),
      classcode: [joi.string().min(5).required(), joi.number().required()],
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }
    const classroom = await Classroom.findOne({
      where: {
        classcode,
      },
    });
    if (!classroom) {
      return res.status(500).send({
        status: 500,
        message: "Classcode is not valid",
      });
    }
    const checkStudentId = await User.findOne({
      where: {
        id: student_id,
      },
    });
    if (!checkStudentId) {
      return res.status(500).send({
        status: 500,
        message: "Student Id not found",
      });
    }
    const checkStudentClassroom = await Classroom.findOne({
      where: {
        id: classroom_id,
      },
    });
    if (!checkStudentClassroom) {
      return res.status(500).send({
        status: 500,
        message: "Classroom Id not found",
      });
    }
    const checkIfStudentIsInClassroom = await Student_Classroom.findOne({
      where: {
        student_id,
        classroom_id,
      },
    });
    if (checkIfStudentIsInClassroom) {
      return res.status(500).send({
        status: 500,
        message: "Student is already in this classroom",
      });
    }

    const joinClassroom = await Student_Classroom.create({
      student_id,
      classroom_id,
    });

    return res.status(201).send({
      status: 201,
      message: "You joined the classroom",
      data: joinClassroom,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getStudentsInClassroom = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const findClassroom = await Classroom.findOne({
      where: {
        id: id,
      },
    });

    if (!findClassroom) {
      return res.status(500).send({
        status: 500,
        message: "Classroom not found",
      });
    }

    const students = await Student_Classroom.findAll({
      where: {
        classroom_id: id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "name", "email", "profile", "no_induk"],
        },
      ],
    });

    return res.status(200).send({
      status: 200,
      message: "Students in classroom",
      data: students,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getTaskInClassroom = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findOne({
      where: {
        id: id,
      },
    });

    if (!classroom) {
      return res.status(500).send({
        status: 500,
        message: "Classroom not found",
      });
    }

    const task = await Task.findAll({
      where: {
        classroom_id: id,
      },
    });

    return res.status(200).send({
      status: 200,
      message: "Task in classroom",
      data: task,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.leaveClassroom = async (req: any, res: any) => {
  try {
    const { student_id, classroom_id } = req.body;

    const schema = joi.object({
      student_id: joi.number().required(),
      classroom_id: joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }
    const checkStudentId = await User.findOne({
      where: {
        id: student_id,
      },
    });
    if (!checkStudentId) {
      return res.status(500).send({
        status: 500,
        message: "Student Id not found",
      });
    }
    const checkStudentClassroom = await Classroom.findOne({
      where: {
        id: classroom_id,
      },
    });
    if (!checkStudentClassroom) {
      return res.status(500).send({
        status: 500,
        message: "Classroom Id not found",
      });
    }

    const joinClassroom = await Student_Classroom.destroy({
      where: {
        student_id,
        classroom_id,
      },
    });

    return res.status(201).send({
      status: 201,
      message: "You left the classroom",
      data: joinClassroom,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.getClassroom = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findOne({
      where: {
        id,
      },
    });
    if (!classroom) {
      return res.status(500).send({
        status: 500,
        message: "Classroom not found",
      });
    }
    return res.status(200).send({
      status: 200,
      message: "Classroom found",
      data: classroom,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getClassByUserId = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    console.log(id);
    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(500).send({
        status: 500,
        message: "User id not valid",
      });
    }

    const getClassById = await Student_Classroom.findAll({
      where: {
        student_id: id,
      },
      include: [
        {
          model: Classroom,
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });

    if (!getClassById) {
      return res.status(200).send({
        status: 200,
        message: "you are not join any class yet",
      });
    }

    return res.status(200).send({
      status: 200,
      message: "Succesfully get the Class",
      class: getClassById,
    });
  } catch (err: any) {
    res.status(500).send({
      message: err.message,
    });
  }
};
