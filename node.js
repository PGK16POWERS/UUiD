const express = require("express");
const app = express();
const { v4: uuidv4} = require("uuid");
const ejs = require("ejs");
const path = require("path");


// USE AND STUFF
app.set("view engine","ejs");
app.use(express.static("views"))

// GET REQUEST
app.get("/", (req,res)=>{
    res.render(path.join(__dirname, "views","index.ejs"));
});

// POST REQUEST
app.get("/newUser", (req, res) => {
    globalUUID = uuidv4(); // Assign the UUID to the global variable
    console.log(globalUUID);
    res.json({ myUUID: globalUUID });
});

app.listen(6500, ()=>{
    console.log("We Rocking Our what????")
})