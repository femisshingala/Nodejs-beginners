var r=require("path");   
console.log(r.dirname("D:/femis/a5.js"));//directory path
console.log(r.extname("D:/femis/a5.js"));//extendtion
console.log(r.basename("D:/femis/a5.js"));//file name


//console.log(r.parse());//full information path
const gty = r.parse("D:/femis/a4.js");

console.log(gty.base);