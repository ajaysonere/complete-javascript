function fetchFunction(url , fn){
    console.log("Url downloading is start ");
    setTimeout(function process(){
        console.log("Url downloaded ", url);
        let response = "Completed";
        fn(response);
    },3000);
}

function writeFile(data , fn){
    console.log("start writing ", data);
    setTimeout(function process(){
        console.log("writing is completed");
        let response = "output.txt";
        fn(response);
    }, 4000);
}

fetchFunction("www.google.com" , function process(response){
    console.log(response);
});