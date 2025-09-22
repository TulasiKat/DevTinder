const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json())

app.post("/signup", async (req, res) => {
// console.log(req.body);
// res.send("fetching")

  const user = new User(req.body);

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
