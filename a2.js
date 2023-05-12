var fs=require("fs");
fs.writeFile("a2.txt","femis shingala",()=>{
    console.log("fff");
});

fs.appendFile("a2.txt","dfehgurnnsj",()=>{
    console.log("oirioriror");
})

fs.readFile("a2.txt","UTF-8",(err,data)=>{
    console.log(data);
})