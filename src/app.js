const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin@test.com",
    gender: "male",
    password: "sachin",
  });

  try {
    await user.save().then(() => {
      res.send("entry added successfully");
    });
  } catch {
    (err) => {
      res.status(400).send("error while adding user");
    };
  }
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("server is running at 3000");
    });
  })
  .catch((err) => {
    console.log("error in connecting database : ", err);
  });
