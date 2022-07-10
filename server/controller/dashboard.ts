export {};
const joi = require("@hapi/joi");
const { User, Classroom, Student_Classroom, Task, Question } = require("../models");
const makeClassCode = require("../utils/GenerateClassCode");
const Sequelize = require("sequelize");


exports.getAllTotal = async (req : any , res : any) => {
    try{
        const totalUsers = await User.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'total']
            ]
        })

        const totalClasses = await Classroom.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'total']
            ]
        })

        const totalTasks = await Task.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'total']
            ]
        })

        

        res.status(200).send({
            status: 200,
            message: "Get all total successfully",
            totalClasses : totalClasses[0],
            totalUsers : totalUsers[0],
            totalTasks : totalTasks[0]

        })
    }catch(err : any){
        res.status(500).send({
            status: 500,
            message: err.message,
        })
    }

}