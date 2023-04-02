function fetchData(url){
    return new Promise (function (resolve , reject){
        console.log("Downloading start from " ,url);
        setTimeout(function process(){
            console.log("Downloading is completed ");
            let data = "dummy data";
            resolve(data);
        },5000);
    });
}

function writeFile(data){
    return new Promise (function (resolve , reject){
       console.log("writing on data ");
       
    });
}