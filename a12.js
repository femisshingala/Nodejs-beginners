const fs=require('fs');
const { json } = require('stream/consumers');

const biodata={
    name:"femis",
    age:22,
    city:"surat"
};
 
 var jn=JSON.stringify(biodata);
 console.log(jn);
 fs.writeFile("a12.json",jn,(err)=>{
    console.log(err);
 })

fs.readFile("a12.json","utf-8",(err,data)=>{
    const obj=JSON.parse(data);
    console.log(data);
    console.log(obj);
    console.log(obj.name);
 })

 



 