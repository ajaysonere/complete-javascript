function fetchData(){
    return new Promise(function(resolve ,reject){
        setTimeout(function process(){
            console.log("Resolved");
            resolve(123); 
        },5000);
    });
}

let x = fetchData();
x.then(function (value){
    console.log("here value is " , value); 
    return 120;
}).then(function(value){
    console.log("In fetchData Then " , value);
});

x.then(function (value){
    console.log("In Second then value is " , value);
})