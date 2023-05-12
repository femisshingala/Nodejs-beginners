const express=require("express");
const app=express();
let Port=2020;

const sendmpail=require("./a17");

app.get("/",(req,res)=>{
    res.send("i am a server");
});

const start = async()=>{
    try{
        app.listen(Port,()=>{
            console.log(`i am live port no ${Port}`);
        }); 
    }catch(error){}
};

app.get("/sendmail",sendmpail);

start();