export {};

const joi = require("@hapi/joi");
const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req: any, res: any) => {
  try {
    const { username, email, password } = req.body;

    const schema = joi.object({
      username: joi.string().min(3).required(),
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const checkEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      return res.status(500).send({
        status: 500,
        message: "Email already exist",
      });
    }

    const saltRounds = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
    res.status(200).send({
      status: 200,
      message: "User created successfully",
      data: {
        id: user.id,
        token,
        username,
        email,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.Login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
    });

    const { error } = schema.validate(res.body);
    if (error) {
      res.status(500).send({
        status: 500,
        message: error.details[0].message,
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(500).send({
        status: 500,
        message: "Email or password is incorrect",
      });
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      return res.status(500).send({
        status: 500,
        message: "Email or password is incorrect",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.status(200).send({
      status: 200,
      message: "Login successfully",
      data: {
        id: user.id,
        token,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.readAllUsers = async (req: any, res: any) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    res.status(200).send({
      status: 200,
      message: "Get all users successfully",
      data: users,
    });
  } catch (error: any) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

exports.readUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).send({
      status: 200,
      message: "Get user successfully",
      data: user,
    });
  } catch (err: any) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
