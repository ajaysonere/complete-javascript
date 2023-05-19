import http from 'http';

const PORT = 4500;

const server = http.createServer((req , res)=>{
   res.end("Server Stoped ");
});

server.listen(PORT , ()=>{
    console.log(`server is running at http:localhost:${PORT}`);
})