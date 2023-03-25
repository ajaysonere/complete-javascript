// setTimeout Function
const id =  setTimeout(function (){
    console.log("callback task 1");
} , 10000);

setTimeout(function(){
    console.log("callback task 2");
    clearTimeout(id);
},5000);


const uid = setInterval(function (){
    console.log("Set Interval 1");
} ,10000);

setInterval(function (){
    console.log("set interval 2");
    clearInterval(uid); 
},2000);


