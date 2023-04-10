// console.log(__dirname);
// console.log(__filename);
const searching  = require("./searching.js");
let arr = [10,20,30,40,50];
let x = 30;
if(searching.linear(arr ,x)){
    console.log("Element is present ");
}else{
    console.log("Element is not present ");
}
