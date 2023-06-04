let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    
    if(req.url == "/"){
       let error = fs.unlinkSync('demo.txt');
       if(error){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File delete fail");
        res.end();
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File delete Success");
        res.end();
    }
    }
});


server.listen(4000);
console.log("Server run Success");


