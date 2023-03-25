// function expression
function fun(){
    console.log("fun is called ");
}

function gun(fn){
   console.log("inside a gun");
   fn();
   console.log("leaving gun");
}

gun(fun);

