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

function uploadFile(filename ,fn){
    console.log("start uploading ",filename);
    setTimeout(function process(){
        console.log("file uploaded ");
        let response = "succesfully";
        fn(response);
    }, 2000)
}

fetchFunction("www.google.com" , function process(response){
    console.log(response);
    writeFile("My name is Ajay Sonere", function process(response) {
        console.log("Data is writing in file ", response);
        uploadFile("output.txt", function process(response) {
            console.log("upload completed ", response);
        });
    });
});