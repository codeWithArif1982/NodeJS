let fs = require('fs');
let http = require('http');

//Delete file

let server = http.createServer((req, res)=>{
    
    if(req.url="/"){
       fs.exists('newDemo.txt',(error)=>{
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File delete failed: ' + error.message);
            res.end();

        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File delete Success ');
            res.end();

        }

       })
    }
});

server.listen(4000);
console.log("Server run Success");
