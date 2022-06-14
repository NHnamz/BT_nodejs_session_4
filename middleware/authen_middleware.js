const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const userList = require("../constants/user");

function authenMiddleware(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    let decode
  try {
        decode = jwt.verify(token, jwtKey);
  } catch (error) {
    res.status(401);
    res.json(error.message);
    return;
  }
  if (decode) {
    const index = userList.findIndex((element) => {
      return element.name === decode.name && element.id === decode.id;
    });
    req["userRole"] = userList[index].role;
    next();
  }else {
    res.json('JWT is invalid')
    res.status(401)
    return
}
}

module.exports = authenMiddleware;
