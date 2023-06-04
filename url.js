const { write } = require('fs');
let http = require('http');
let URL = require('url');

let server = http.createServer((req, res)=>{
   let myURL = "https://www.google.com/search?q=bangladdesh&sxsrf=APwXEde1W-rnLCgfWdpCSKlNDI-pajuhIw%3A1685744918332&source=hp&ei=Fm16ZLekEfSrqtsP_d64oA8&iflsig=AOEireoAAAAAZHp7JsU-VU6PyTozxdOiFuosZ5ZYyVpD&ved=0ahUKEwi3h6WY0aX_AhX0lWoFHX0vDvQQ4dUDCAs&uact=5&oq=bangladdesh&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELECECcyBwgjELECECcyBwgjELECECcyCgguELEDEIAEEAoyBwgAEIAEEAoyBwgAEIAEEAoyCggAEIAEELEDEAoyCggAEIAEELEDEAoyBwgAEIAEEAoyCggAEIAEELEDEAo6BwgjEOoCECc6BwguEOoCECc6BAgjECc6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToICAAQgAQQsQM6DgguEIAEELEDEMcBENEDOgsIABCABBCxAxCDAToFCAAQgAQ6FAguEIAEELEDEIMBEMcBENEDENQCOgsIABCABBCxAxDJAzoICAAQigUQkgM6CAguEIAEELEDOggILhCxAxCABDoLCC4QgAQQxwEQrwE6CwgAEIoFELEDEIMBOhEILhCABBCxAxDHARCvARDUAjoICAAQigUQsQNQujRY0FpgmF5oAXAAeACAAbEBiAHmCpIBBDAuMTGYAQCgAQGwAQo&sclient=gws-wiz";
   
   let myUrlObj =  URL.parse(myURL,true);
   let myHostName =  myUrlObj.hostname;
   let myPathName =  myUrlObj.pathname;
   let mySearchName = myUrlObj.search;
   let myHost = myUrlObj.host;
   
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(`Host name : ${myHostName}`);
   res.write("================");
   res.write(`Path Name: ${myPathName}`);
   res.write("================");
   res.write(`Search Name: ${mySearchName}`);
   res.end();
});

server.listen(3000);
console.log("Server run Success");
