var express = require('express') //dynamic name
var path = require('path')
var app = express()

const template=path.join(__dirname,"temp")
console.log(template);


//part of hbs it require views foulder
app.set('view engine','hbs');
app.set('views',template);



app.get("",(req,res)=>{

    res.render("index",{
        dynamic:"kano" //dynamic added  name kano change tempte hbs files
    });
    //console.log(__dirname);
});

app.get("/about",(req,res)=>{
    res.render('about');
    
});


app.listen(2000,()=>{
    console.log("sucess");
});