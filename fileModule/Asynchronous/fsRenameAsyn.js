let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    
    if(req.url="/"){
       fs.rename('demo.txt','newDemo.txt',(error)=>{
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File rename failed: ' + error.message);
            res.end();

        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File rename Success ');
            res.end();

        }

       })
    }
});

server.listen(4000);
console.log("Server run Success");
