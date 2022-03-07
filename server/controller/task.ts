const { Classroom, Task, User, Student_Classroom } = require("../models");

const createTask = async (req: any, res: any) => {
  try {
    const { classroom_id, answer_key, title, deadline, description, other } =
      req.body;
  } catch (err) {}
};
