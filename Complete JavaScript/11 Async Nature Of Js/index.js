// sync natuer of js
console.log("Start Execution By sync");
for(let i=0; i<1000000000;i++){
    // It will take some time
}
console.log("Stop Execution By sync ");

console.log("Start Execution By async ");

setTimeout(function(){
    for (let i = 0; i < 1000000000; i++) {
        // It will take some time
    }
},0);

console.log("Stop Execution By async ");

