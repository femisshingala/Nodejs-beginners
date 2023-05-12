const express =require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("this home ");
});

app.get("/about",(req,res)=>{
    res.send("this about ");
})

app.listen(8080,()=>{
    console.log("listing port");
})