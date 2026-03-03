// import du http
const http=require('http');
// cre
http.createServer((req,res)=>{
    res.end("<h1>Hello Node!</h1>\n");
}).listen(3000)