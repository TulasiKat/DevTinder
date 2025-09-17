const express = require("express");
const app = express();
 
const {adminAuth, userAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.get("/user/login", (req, res) => {
  res.send("user loggedin successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("user got all data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("admin got all data");
});

app.get("/admin/deleteuser", (req, res) => {
  res.send("admin deleted the user");
});

app.listen(3000, () => {
  console.log("server is running");
});
