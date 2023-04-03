// sync natuer of js
// console.log("Start Execution By sync");
// for(let i=0; i<1000000000;i++){
//     // It will take some time
// }
// console.log("Stop Execution By sync ");

// console.log("Start Execution By async ");

// setTimeout(function(){
//     for (let i = 0; i < 1000000000; i++) {
//         // It will take some time
//     }
// },0);

// console.log("Stop Execution By async ");

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Downloading start from ", url);
        setTimeout(function process() {
            console.log("Downloading is completed ");
            let data = "dummy data";
            resolve(data);
        }, 5000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("writing in file ", data);
        setTimeout(function process() {
            let filename = "output.txt";
            console.log("Writing is completed ");
            resolve(filename);
        }, 3000);
    });
}

function uploadFile(filename) {
    return new Promise(function (resolve, reject) {
        console.log("File uploding is started ", filename);
        setTimeout(function process() {
            let uploadedOn = "aws";
            console.log("File uploaded sucessfully ");
            resolve(uploadedOn);
        }, 4000);
    });
}

async function processing(){
    let getData = await fetchDownload("www.ajaysonre.com");
    let writtenData = await writeFile(getData);
    let upload = await uploadFile(writtenData);
}

