const fs = require('fs');

let content = "";

const readStreame = fs.createReadStream("read.txt");

readStreame.on("data" , (chunk)=>{
  content += chunk;
});

readStreame.on("close", ()=>{
    console.log(content);
})


content = "I Love my family .......";

const writeStream = fs.createWriteStream('read.txt');

writeStream.write(content);

writeStream.end();

writeStream.on("finish",()=>{
    console.log("Writing is Completed ");
});