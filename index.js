const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRouter = require("./router/Login");
const movieRouter = require("./router/Movie");
const authenMiddleware = require("./middleware/authen_middleware");

app.use(bodyParser.json({ extended: true }));
app.use("/login", loginRouter);
app.use("/movie", authenMiddleware, movieRouter);

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("This app is running on port 3000");
});