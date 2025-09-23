const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // res.send("fetching")

  const user = new User(req.body);

  try {
    await user.save().then(() => {
      res.send("User added successfully!");
    });
  } catch {
    (err) => {
      res.status(400).send("error while adding user");
    };
  }
});

app.get("/feed", async (req, res) => {
   try {
    const user = await User.find({ });
    if (user.length === 0){
      res.status(404).send("User not found")
    }
    res.send(user)
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//find user by email
app.get("/user", async (req, res) => {
   try {
    const user = await User.findOne({ emailId: req?.body?.emailId });
    if (user.length === 0){
      res.status(404).send("User not found")
    }
    res.send(user)
  } catch (err) {
    res.status(400).send("something went wrong");
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
