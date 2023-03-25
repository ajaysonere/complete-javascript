function callback(x ,fun){
    for( let i=0; i<x ;i++){
        console.log(i);
    }
    fun();
}

callback(10,function(){
     console.log("callback is called ");
})

console.log("New Function ");
let arr = [1,2,3,4,5,6]; 
let ans =  arr.map(function process(v,i){
    console.log(v, i);
    return v*v;
});

console.log(ans);
