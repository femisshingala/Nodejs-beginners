var express = require('express')
var path = require('path')
var app = express()


//console.log(__dirname);
console.log(path.join(__dirname,"/node/public"));

var staticPath = path.join(__dirname,"/node/public/a18.js");

//builtin middleware
app.use(express.static(path.join(__dirname,"/node/public")));


app.get("/",(req,res)=>{
    res.send();
    //console.log(__dirname);
});


app.listen(2000,()=>{
    console.log("sucess");
});