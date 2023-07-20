const fs = require('fs');

let content = "";

const readStreame = fs.createReadStream("read.txt");

readStreame.on("data" , (chunk)=>{
  content += chunk;
});

readStreame.on("close", ()=>{
    console.log(content);
})