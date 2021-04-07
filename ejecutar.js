
const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200,{'content-type' : 'text/plain'});
    
    res.end(`el resultado es `);


}).listen(3000);

