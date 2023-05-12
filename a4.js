var os =require("os");
var free=os.freemem();
console.log(`${free/1024/1024/1024}`);

var free=os.totalmem();
console.log(`${free/1024/1024/1024}`);

console.log(os.hostname())
console.log(os.platform())
console.log(os.machine())
console.log(os.tmpdir())
console.log(os.type())