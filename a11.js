const { json } = require("stream/consumers");

const biodata={
    name:"femis",
    age:22,
    city:"surat"
};
//object converto  json in 
// result json {"name":"femis","age":22,"city":"surat"}
const obj_convert_to_json =JSON.stringify(biodata);
console.log(obj_convert_to_json);

//Json converto  object in
//result object { name: 'femis', age: 22, city: 'surat' }
const obj=JSON.parse(obj_convert_to_json);
console.log(obj);
console.log(obj.name); //true
console.log(obj.age);
console.log(obj.city);