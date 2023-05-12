const b = require("http");

const server=b.createServer((req,res)=>{

    console.log(req.url);
    if(req.url=="/")
    {
        res.end("<h1>hello this is home page</h1>");
        console.log("<h1>hello this is home page</h1>");
    }
    else if(req.url=="/about")
    {
        res.end("<h1>hello about</h1>")
        console.log("hello about");
    }else
    {
        res.writeHead(404,{'Content-Type':'text/html'}); //error 404 page not found
    res.end("error 404 <img src='./password.jpeg' alt='image not found' width='500' height='600'>"); //res.end() == res.write()
    
    }

   

     
});

server.listen(2020,"127.0.0.1",()=>{
    console.log("rahh completed");
})