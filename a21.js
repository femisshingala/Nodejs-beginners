const express =require('express');
const app=express();

app.get("/about",(req,res)=>{
res.send("<p>uhhec bue buu</p>");
});

app.get("/",(req,res)=>{
    res.json([{id:1,
        name:"femis"},
        {id:1,
            name:"femis"}]);
            res.send();
    });


app.listen("2020",()=>{
        console.log("completed");
    });