const express = require("express");
const movieRouter = express.Router();
const movieList = require("../constants/Movie");

movieRouter.get("/", (req, res) => {
  if (req.userRole === "Guest") {
    res.json(movieList.filter((el) => el.type === "free"));
  } else {
    res.json(movieList);
  }
});

movieRouter.post("/", (req, res) => {
  if (req.userRole !== "Admin") {
    res.status(401);
    res.json("Unauthorized");
    return;
  }

  const msgBody = req.body;
  movieList.push(msgBody);
  res.json(movieList);
});

module.exports = movieRouter;