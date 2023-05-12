const EventEmitter=require("events");
// const event=require("events");
const event=new EventEmitter(); 

event.on('sayMyName',()=>{
   console.log("your name is raju");
});//like funcation
event.on('sayMyName',()=>{
    console.log("your name is vinod");
 });
event.on('abc',()=>{
    console.log("femis name is vinod");
 });


event.emit('sayMyName');//calling



event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc}  and the page is ${msg}`);
})


event.emit('checkpage',200,"ok");

