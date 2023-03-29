// Promises
// obj = {x:5}
// console.log(obj);
// obj.x = 10;
// console.log(obj);


// inversion of control
function fun(inputString , fn){
    let arr = inputString.split(',');
    for(let i=0; i<arr.length; i++){
        fn(arr[i]);
    }
}

fun("name : Ajay , subject:cse", function(ip){
    let arr = ip.split(':');
    for(let i=0; i<arr.length;i++){
        console.log(`{ ${arr[0]} => ${arr[1]}}`);
    }
})