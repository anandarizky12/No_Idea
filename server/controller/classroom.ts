export {};
const joi = require("@hapi/joi");
const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createClassroom = async (req: any, res: any) => {
  return res.status(200).send({
    status: 200,
    message: "Create Class Success",
  });
};

// exports.Login = async (req: any, res: any) => {
//   try {
//     const { email, password } = req.body;

//     const schema = joi.object({
//       email: joi.string().email().min(10).required(),
//       password: joi.string().min(8).required(),
//     });

//     const { error } = schema.validate(res.body);
//     if (error) {
//       res.status(500).send({
//         status: 500,
//         message: error.details[0].message,
//       });
//     }

//     const user = await User.findOne({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       return res.status(500).send({
//         status: 500,
//         message: "Email or password is incorrect",
//       });
//     }

//     const validatePassword = await bcrypt.compare(password, user.password);
//     if (!validatePassword) {
//       return res.status(500).send({
//         status: 500,
//         message: "Email or password is incorrect",
//       });
//     }

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

//     res.status(200).send({
//       status: 200,
//       message: "Login successfully",
//       data: {
//         id: user.id,
//         token,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         role: user.role,
//         profile: user.profile,
//         no_induk: user.no_induk,
//       },
//     });
//   } catch (err: any) {
//     res.status(500).send({
//       status: 500,
//       message: err.message,
//     });
//   }
// };

// exports.readAllUsers = async ({ req, res }: any) => {
//   try {
//     const users = await User.findAll({
//       attributes: { exclude: ["password"] },
//     });

//     res.status(200).send({
//       status: 200,
//       message: "Get all users successfully",
//       data: users,
//     });
//   } catch (error: any) {
//     res.status(500).send({
//       status: 500,
//       message: error.message,
//     });
//   }
// };

// exports.readUser = async ({ req, res }: any) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findOne({
//       where: {
//         id: id,
//       },
//       attributes: {
//         exclude: ["password"],
//       },
//     });
//     res.status(200).send({
//       status: 200,
//       message: "Get user successfully",
//       data: user,
//     });
//   } catch (err: any) {
//     res.status(500).send({
//       status: 500,
//       message: err.message,
//     });
//   }
// };
