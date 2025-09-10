const express = require("express");

const app = express();

app.get("/user" , (req, res)=>{
    res.send("User : Tulasi")
})

app.post("/user" , (req, res)=>{
    res.send("User added : Mounika")
})
app.delete("/user" , (req, res)=>{
    res.send("Deleted user")
})


app.listen(3000, () => {
    console.log("server is running"
)
})