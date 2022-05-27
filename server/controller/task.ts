const {
  Classroom,
  Task,
  User,
  Student_Classroom,
  Answer_task,
  Score,
  Question
} = require("../models");
const GenerateTotalScore = require("../utils/GenerateTotalScore");
const joi = require("@hapi/joi");

exports.createTask = async (req: any, res: any) => {
  try {
    const { id } = req.params
    const {
      user_id,
      title,
      deadline,
      description,
      other,
      question 
    } = req.body;
    const schema = joi.object({
      user_id: joi.number().required(),
      title: joi.string().required(),
      deadline: joi.string().allow(null),
      description: joi.string().allow(null),
      other: joi.string().allow(null),
    });

    const { error } = schema.validate({
      user_id,
      title,
      deadline,
      description,
      other});

    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const checkClass = await Classroom.findOne({
      where: {
        id: id,
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
      classroom_id : id,
      title,
      deadline,
      description,
      other,
    });

       //create new arr of question to rename the key_value, to bulk insert to the database
       let newuQuestion = []

       for (let x in question) {
         newuQuestion.push({
           question: question[x][`question_${x}`],
           answer_key : question[x][`answer_key_${x}`],
           task_id : task.id
         })
       }

    const question_id = await Question.bulkCreate(newuQuestion);

    return res.status(200).send({
      status: 200,
      message: "Task created",
      data: task,
      question : question_id
    });
  } catch (err: any) {
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.deleteTask = async (req: any, res: any) => {
  try {
    //task id 
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
    await Question.destroy({
      where: {
        task_id: id,
      },
    });

    return res.status(200).send({
      status: 200,
      message: "Task succesfully deleted",
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
    const { title, deadline, description, other } = req.body;
  
    const schema = joi.object({
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

exports.editQuestion = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { question, answer_key } = req.body;
   
    const schema = joi.object({
      question: joi.string().required(),
      answer_key: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const question_db = await Question.update(
      {
        question,
        answer_key,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).send({
      status: 200,
      message: "Question updated",
      data: question_db,
    });
  }catch(err : any){
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

    const { id } = req.params;
    const score = await Score.findAll({
      where: {
        classroom_id: id,
      },
      include : [{
        model : Task
      },
      {
        model : Answer_task,
        include : [{
          model : User
        }]
      }
    ],
      order: [["createdAt", "DESC"]],
    });

    const task = await Task.findAll({
      where: {
        classroom_id: id,
      },
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
      data: GenerateTotalScore(score),
    });
  } catch (err: any) {
    console.log(err)
    return res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};


exports.getTaskAndQuestion = async (req: any, res: any) => {
 
  try {
    const { id } = req.params;
    const classroom_id = req.query.class;

    const task = await Task.findOne({
      where: {
        id: id,
        classroom_id: classroom_id,
      },
      include : [{
        model : Question,
        where : {
          task_id : id
        },
      
        attributes: { exclude: ["answer_key"] },
       
      }
      ],
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


exports.getDetailTask = async (req : any ,res : any) =>{
    try{
      //id tugas 
      const { task_id } = req.params;
      // id kelas 
      // const { class_id } = req.query;
      // id user
      const user_id = req.user.id;

      const user = await User.findOne({
        where : {
          id : user_id
        }
      });


      const task = await Task.findOne({
        where : {
          id : task_id,

        },
        include :[{
          model :Question,
        }]
      });

      if(!task){
        return res.status(500).send({
          status : 500,
          message : "Task not found"
        })
      }

      if(user.role === "guru"){
        return res.status(200).send({
          status : 500,
          data : task,
          message : "succesfully get task detail"
          
        })
      }


      const check_if_user_already_answer = await Question.findOne({
        where : {
          task_id : task_id
        },
        include : [{
          model : Answer_task,
          where : {
            student_id : user_id
          }
        }]
      })


      let task_with_answer
      if(check_if_user_already_answer){
        task_with_answer  = await Task.findOne({
          where : {
            id : task_id
          },
          include : [{
            model : Question,
            attributes: { exclude: ["answer_key"]},
            include :[{
              model : Answer_task ,
              where : {
                student_id : user_id
              },
              include : [
                {
                  model : User,
                
                },
                {
                  model :Score
                }
              ]
            }] 
          }]
        
        })
    }else{
      task_with_answer =  await Task.findOne({
        where : {
          id : task_id
        },
        include : [{
          model : Question,
          attributes: { exclude: ["answer_key"]},
          
        }]
      
      })
    }



      return res.status(200).send({
        status : 400,
        message : "Success Get Task Details",
        data : task_with_answer
      })
   

    }catch(err : any ){
      res.status(500).send({
        message : err.message,
        status : 500
      })
    }
}


