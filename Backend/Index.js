
let express= require("express");

let app= express();

let port =3000;

app.listen(port, ()=>{
    console.log("app are listen");
})

let obj= {
    apple:"use"
}

// let data = "<h1>fruit</h1> <li>orange</li><li>mango</li>"
// app.use( (req,res)=>{
//    res.send(data);

// })

app.get("/:user/:id", (req, res)=>{
    // res.send("<h1>mango</h1>")
    let {id, user}=req.params;
    console.log(req.params)
    res.send(`<h1>wellcome @${user} of id :${id}</h1>`)
})


app.get("/search", (req, res)=>{

    let{q}= req.query;
    console.log(q);
    res.send(`<h1>${q}</h1>`)
})