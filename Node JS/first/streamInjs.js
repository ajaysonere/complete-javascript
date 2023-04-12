import fs from "fs";
import  url  from "url";
import path from "path";
import  transformStream  from "stream";
import { setTimeout } from "timers/promises";
import { error } from "console";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);

const middleLayer = new transformStream.Transform({
    Transform(chunks,UTF,nextCallback){
        let modifiedChunk = chunks.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCallback,1000);
    }
})

const fileData = fs.createReadStream(__dirname + "/input.txt");
const outPutData = process.stdout;
fileData.pipe(outPutData);
let newMiddleData = fileData.pipe(middleLayer);
newMiddleData.pipe(outPutData);