let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    
    if(req.url == "/"){
       let isExistsFile = fs.existsSync('demo1.txt');
       if(isExistsFile){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File exists");
        res.end();
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File not exists");
        res.end();
    }
    }
});


server.listen(4000);
console.log("Server run Success");


