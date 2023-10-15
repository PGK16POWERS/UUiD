const express = require("express");
const app = express();
const { v4: uuidv4} = require("uuid");

// GET REQUEST
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public","index.html"));
});

// POST REQUEST
app.post("/newUser", (req,res)=>{
    const name = req.body;
    
})


app.listen(6500, ()=>{
    console.log("We Rocking Our what????")
})