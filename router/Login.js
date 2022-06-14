const express = require("express");
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const jwtKey = require("../constants/key");
const userList = require("../constants/User")

loginRouter.post("/", (req, res) => {
  const msgBody = req.body;
  const index = userList.findIndex((el) => {
    return el.id === msgBody.id && el.name === msgBody.name;
  });
  const isAuthorized = index >= 0;
  if (!isAuthorized) {
    res.status(401);
    res.json("Unauthorized");
    return;
  }
  const token = jwt.sign(msgBody, jwtKey);
  res.json({ token: token });
});
module.exports = loginRouter;