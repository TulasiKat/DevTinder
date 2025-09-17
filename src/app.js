const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  throw new Error("errorred");
  res.send("user data sent");
});

app.use("/", (err, req, res, next)=>{
if (err){
    res.status(500).send("something went wrong")
}
})

app.listen(3000, () => {
  console.log("server is running");
});
