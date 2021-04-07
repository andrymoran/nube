const cas = require('./node');
const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200,{'content-type' : 'text/plain'});
    
    res.end(`el resultado es ${cas}`);


}).listen(3000);

console.log(`el resultado es ${cas}`);