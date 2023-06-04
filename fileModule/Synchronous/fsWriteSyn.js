let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    
    if(req.url == "/"){
       let error = fs.writeFileSync('demo-sync.txt','Hello world with Sync');
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


server.listen(3000);
console.log("Server run Success");


