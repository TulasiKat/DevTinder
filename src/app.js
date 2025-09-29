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


//get all users
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


// get user by id
app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
   try {
    const user = await User.findById(userId);
    if (user.length === 0){
      res.status(404).send("User not found")
    }
    res.send(user)
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});


//delete a user
app.delete("/user" , async (req, res) => {
  const userId = req.body.userId;
  try{
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully")
  }catch(err){
 res.status(400).send("something went wrong");
  }

})


//update data of a user
app.patch("/user" , async (req, res) => {
  const userId = req.body.userId;
  const options = req.body.options;

  console.log(userId, options)
  try{
    const user = await User.findByIdAndUpdate(userId,options);
    res.send("User updated successfully")
  }catch(err){
 res.status(400).send("something went wrong");
  }

})

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
