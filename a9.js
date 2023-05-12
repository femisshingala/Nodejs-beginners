//createServer

const a=require("http");
const server=a.createServer((req,res)=>{
res.end('ggggg hello');
});
//listen(port no ,ip adress ,callback function)
server.listen(2020,"127.0.0.1",()=>{
    console.log("listen port");
});