const {
  Classroom,
  Task,
  User,
  Student_Classroom,
  Answer_task,
  Score,
} = require("../models");
const joi = require("@hapi/joi");

exports.createTask = async (req: any, res: any) => {
  try {
    const {
      classroom_id,
      user_id,
      answer_key,
      title,
      deadline,
      description,
      other,
    } = req.body;
    const schema = joi.object({
      classroom_id: joi.number().required(),
      user_id: joi.number().required(),
      answer_key: joi.string().required(),
      title: joi.string().required(),
      deadline: joi.string().allow(null),
      description: joi.string().allow(null),
      other: joi.string().allow(null),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const checkClass = await Classroom.findOne({
      where: {
        id: classroom_id,
        teacher_id: user_id,
      },
    });
    if (!checkClass) {
      return res.status(500).send({
        status: 500,
        message: "id Invalid",
      });
    }

    const task = await Task.create({
      classroom_id,
      answer_key,
      title,
      deadline,
      description,
      other,
    });
    return res.status(200).send({
      status: 200,
      message: "Task created",
      data: task,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

//considering coz security reason
exports.deleteTask = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: {
        id: id,
      },
    });

    if (!task) {
      return res.status(500).send({
        status: 500,
        message: "Task not found",
      });
    }
    await task.destroy();
    return res.status(200).send({
      status: 200,
      message: "Task deleted",
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.editTask = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { answer_key, title, deadline, description, other } = req.body;
    const schema = joi.object({
      answer_key: joi.string().required(),
      title: joi.string().required(),
      deadline: joi.string().allow(null),
      description: joi.string().required(),
      other: joi.string().allow(null),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const task = await Task.update(
      {
        answer_key,
        title,
        deadline,
        description,
        other,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).send({
      status: 200,
      message: "Task updated",
      data: task,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getTask = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const classroom_id = req.query.class;
    const task = await Task.findOne({
      where: {
        id: id,
        classroom_id: classroom_id,
      },
      attributes: { exclude: ["answer_key"] },
    });
    if (!task) {
      return res.status(500).send({
        status: 500,
        message: "Task not found",
      });
    }
    return res.status(200).send({
      status: 200,
      message: "Task found",
      data: task,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getAllScore = async (req: any, res: any) => {
  try {
    // const { id } = req.user;

    const { id } = req.params;

    const score = await Score.findAll({
      where: {
        classroom_id: id,
      },
      attributes: { exclude: ["answer_key"] },
      include: [
        {
          model: Task,
          attributes: { exclude: ["answer_key"] },
        },
        {
          model: Answer_task,

          include: [
            {
              model: User,
              attributes: { exclude: ["password"] },
            },
          ],
        },
        {
          model: Classroom,
        },
      ],
    });
    if (!score) {
      return res.status(500).send({
        status: 500,
        message: "No Score Yet",
      });
    }
    return res.status(200).send({
      status: 200,
      message: "Score found",
      data: score,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
