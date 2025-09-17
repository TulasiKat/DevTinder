const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res , next) => {
    //Route handler
     next()
    res.send("handing the user route 1");
    console.log("handing the user route 1");
   
  },
  (req, res) => {
    res.send("handing the user route 2");
  }
);

app.listen(3000, () => {
  console.log("server is running");
});
