var express = require('express') //dynamic name
var path = require('path')
var hbs=require('hbs');
var app = express()

var template1=path.join(__dirname,"/temp1/partials")
const template=path.join(__dirname,"temp")
console.log(template1);


//part of hbs it require views foulder
app.set('view engine','hbs');
app.set('views',template);
hbs.registerPartials(template1);



app.get("/",(req,res)=>{
    res.render("femis");
    
});


app.get("/about",(req,res)=>{
    res.render('about page');
    
});


app.listen(2000,()=>{
    console.log("sucess");
});