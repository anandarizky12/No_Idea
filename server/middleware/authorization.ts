export {};

const jwt = require("jsonwebtoken");

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
