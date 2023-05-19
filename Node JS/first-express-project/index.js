// basic server using the express

import express from 'express';

const app = express();
const PORT = 4512;

app.get('/' , (req , res )=>{
    res.send("HELLO WORLD");
})

app.post("/",(req , res)=>{
    res.send("HELLO WORLD FROM POST METHOD");
})

app.patch("/" , (req , res)=>{
   res.send("HELLO WORLD FROM PATCH METHOD");
})

app.listen(PORT , ()=>{
    console.log(`server is runnig at http://localhost:${PORT}`);
})