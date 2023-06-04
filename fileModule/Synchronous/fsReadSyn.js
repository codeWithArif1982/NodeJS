let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res)=>{
    
    if(req.url="/"){
        fs.readFile('Home.html',(error, data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
});

server.listen(4040);
console.log("Server run Success");
