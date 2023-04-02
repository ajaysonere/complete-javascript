// promises
function downloadData(url){
     return new Promise(function(resolve , reject){
         console.log("Downloading start " , url);
         setTimeout(function process(){
           let response = "my profile is downloaded ";
           console.log("downloading comleted ");
           resolve(response);
         },4000);
     });
}
downloadData("www.google.com");

function fun(){
    return new Promise(function(resolve , reject){
        let i =0;
       for(; i<1000000000; i++){
          
       }
       let data = i;
       console.log("Task is Completed ");
       resolve(i);
    });
}

fun();