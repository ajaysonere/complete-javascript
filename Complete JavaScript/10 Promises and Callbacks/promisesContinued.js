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
       console.log("writing in file " , data);
       setTimeout(function process(){
         let filename = "output.txt";
         console.log("Writing is completed ");
         resolve(filename);
       },3000);
    });
}

function uploadFile(filename){
    return new Promise(function(resolve , reject){
       console.log("File uploding is started " ,filename);
       setTimeout(function process(){
        let uploadedOn = "aws"; 
        console.log("File uploaded sucessfully ");
        resolve(uploadedOn);
       },4000);
    });
}

let fetchDownload = fetchData("www.drive.com");
fetchDownload.then(function process(value){
    console.log("Download promise is  fulfilled " , value);
    let getWritingData = writeFile(value);
    getWritingData.then(function(value){
        console.log("writing data fulfilled in file ", value);
        let upload = uploadFile(value);
        upload.then(function(value){
            console.log("file is uploaded " , value);
        });
    });
});