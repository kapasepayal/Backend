let express = require("express");
let app = express();
let path= require("path");
let port = 3000;

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

post=[
   {
    username:"raul kumar",
    content:"rahul is good boy"
   }, 
   {
    username:"apana college",
    content:"hard work is a key of sucess",

   },
   {
    username:"paya",
    content:"silensy is best polisy",
   }
]

app.listen(port, ()=>{
    console.log("port are listening");
})

app.get("/post",(req, res)=>{
    res.render("index.ejs", {post});
})

app.get("/post/new", (req, res)=>{
    res.render("new.ejs")
})

app.post("/post", (req, res)=>{
    console.log(req.body);

    let {username, content}= req.body;
    console.log(`${username}, ${content}`)
    post.push({username, content});

    res.redirect("/post");
})

app.use((req, res)=>{
    res.send("massage are send");
})