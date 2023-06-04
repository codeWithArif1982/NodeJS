let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    
    if(req.url == "/"){
       let error = fs.renameSync('demo-sync.txt','demo-sync1.txt');
       if(error){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File write fail");
        res.end();
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File write Success");
        res.end();
    }
    }
});


server.listen(4000);
console.log("Server run Success");


