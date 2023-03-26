// Promises And Callbacks
function todo(task){
    setTimeout(function (){
        console.log(task ,"is Completed ");
    }, 5000);
}

console.log("Assignment Start ");
todo("assignment");
console.log("Assignment end ");