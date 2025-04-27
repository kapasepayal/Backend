let express = require("express");
let app= express();

let port = 3000;
const path = require("path");

// path joining for HTML ejs temple.............
app.set("views", path.join(__dirname,"./views"));

// for sevrfing to server static file using express...............
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

// set the view setEngine................
app.set("views engine", "ejs");

app.get("/", (req, res)=>{
    // res.send("masssage is ok");
    res.render("index.ejs");
})

// send data to ejs file on rendaring the file in oject form{}...........
app.get("/rolldies", (req, res)=>{
    let num = Math.floor(Math.random()*6)+1;
    let arr=["apple", "mango", "santra"]
    res.render("rolldies.ejs", {arr, diceval:num});
})

// send data of req.params to the ejs file...........
app.get("/intagram/:user", (req, res)=>{
    let{user}= req.params;
    console.log(user);

    let data= require("./Data.json");
     res.render("intagram.ejs",{data:data[user]});
})

app.listen(port, ()=>{
    console.log("port are listening");
})

// defult send Massage.........
app.use((req, res)=>{
    res.send("<h1>rounting path is not correct</h1>");
})