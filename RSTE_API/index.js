let express = require("express");
let app = express();
let path= require("path");
let port = 3000;

// uuid instal....... 
const {v4:uuidv4}= require('uuid');

// method gor patch delet alternative for post.........
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

// post post req.body parameter.........
app.use(express.urlencoded({extended: true}));

// set view ingine ...........
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serving publick folder to enywer...........
app.use(express.static(path.join(__dirname, "public")));


post=[
   {
    id: uuidv4(),
    username:"raul kumar",
    content:"rahul is good boy"
   }, 
   {
    id:uuidv4(),
    username:"apana college",
    content:"hard work is a key of sucess",

   },
   {
    id:uuidv4(),
    username:"paya",
    content:"silensy is best polisy",
   }
]


app.listen(port, ()=>{
    console.log("port are listening");
})

// showing post..........
app.get("/post",(req, res)=>{
    res.render("index.ejs", {post});
})

// showing form of post...........
app.get("/post/new", (req, res)=>{
    res.render("new.ejs")
})

// add new post data to post........
app.post("/post", (req, res)=>{
    console.log(req.body);

    let {username, content}= req.body;
    let id= uuidv4();
    // console.log(`${username}, ${content}`)
    post.push({id, username, content});
    res.redirect("/post");
})


app.get("/post/:id", (req,res)=>{
    console.log(req.params);
    let {id}= req.params;

    // console.log(id);
  
    let postDetail = post.find((p) => id.trim() === p.id.trim());
    if (!postDetail) {
        return res.status(404).send("Post not found!");
    }
    // console.log(postDetail);
    res.render("dtail.ejs", {postDetail}) 
})

app.patch("/post/:id", (req,res)=>{
    let{id}= req.params;
    let newcontent= req.body.content;

    let postEdit= post.find((p)=>p.id.trim()===id.trim());
    postEdit.content= newcontent;
    // console.log(post);
    // res.send("path requiset get accept");
    res.redirect("/post");
}) 

// edit the post.........
app.get("/post/:id/edit",(req,res)=>{
    let {id}= req.params;
    let postedit= post.find((p)=>p.id.trim()===id.trim());
    // console.log(postedit);
    res.render("edit.ejs",{postedit})
    
})

// delet the post.........
app.delete("/post/:id",(req, res)=>{
    let {id}=req.params;
    post= post.filter((p)=> p.id.trim()!== id.trim());
    console.log(post);
   res.redirect("/post");

})

app.use((req, res)=>{
    res.send("massage are send");
})