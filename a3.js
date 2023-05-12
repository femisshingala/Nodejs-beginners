var  a=require("fs");
//var c=a.readFileSync("a3.txt","utf-8");
var d=a.readFile("a3.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log("completed0");