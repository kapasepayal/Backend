
let express = require("express");
let app= express()


let port = 8080;

app.listen(port, ()=>{
    console.log("app listen...");
})



app.get("/:regist", (req, res)=>{
    // let {regist} = req.params
    console.log(req.params)
    res.send("<h1>get requist </h1>")
})


app.post("/regist", (req,res)=>{
    res.send("<h1>post reqist</h1>")
})