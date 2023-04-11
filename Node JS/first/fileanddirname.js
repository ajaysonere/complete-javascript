#!/usr/bin/env node

import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
console.log("File Path ", __filename);
console.log("Dir path " , __dirname);