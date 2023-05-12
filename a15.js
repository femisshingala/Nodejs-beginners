 const fs=require("fs");
 const http=require("http");

 const a=http.createServer();

 a.on('request',(req,res)=>{
    // var fs=require("fs");
    // fs.readFile("a15.txt",(err,data)=>{ //not stream mode
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    const rs=fs.createReadStream("a15.txt");//filename == a155.js error provide

    // rs.on("data",(chankdata)=>{
    //     res.write(chankdata);
    // })

    // rs.on("end",()=>{
    //     res.end(  );
    // })

    // rs.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found")
    // })

 
    //single line code stream code

    rs.pipe(res); //second ways
 });

 a.listen(2020);


