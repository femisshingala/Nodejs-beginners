const http=require("http");
const fs=require("fs");
const { json } = require("stream/consumers");

const server=http.createServer((req,res)=>{

    const data= fs.readFileSync(`${__dirname}/a13.json`,"utf-8");
       const data1=JSON.parse(data);
    if(req.url=="/")
    {
        res.end("hello home");
    }
    else if(req.url=='/about')
    {
        res.end("hello about");
    }
    else if(req.url=='/api')
    {
       res.writeHead(200,{"content-type":"application/json"});
       console.log(data1[2].Name);

       
    }
    else {
        res.end("<h2> err 404 no internet</h2>");
    }
})


server.listen(2020,"127.0.0.1");