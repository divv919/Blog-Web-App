import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bodyData = "";
var titleData = "";
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.get('/post-new',(req,res)=>{
    res.render('postnew.ejs');
})
app.post('/',(req,res)=>{
    console.log(req.body)
    const data = {title : req.body.title, content : req.body.content};
    titleData = req.body.title;
    bodyData = req.body.content;
    res.render('home.ejs',data);
})
app.get('/blog-content',(req,res)=>{
    res.render('blog.ejs',{bodyContent: bodyData, bodyTitle : titleData});
})

app.listen(port,function(err){
    if(err) console.log("Error in server setup");
    else console.log(`Server running at port: ${port}`);
})