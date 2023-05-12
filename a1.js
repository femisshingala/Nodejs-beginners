var req = require("fs");


req.writeFileSync("read.txt","tfsfsf");req.appendFileSync("read.txt","djjss");

  const av=req.readFileSync("read.txt");
  const a=av.toString();
  console.log(a);

  req.renameSync("read.txt","akhli.txt");
