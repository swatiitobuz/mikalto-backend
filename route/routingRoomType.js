const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log("a request is made on " + req.url);
    if (req.url === "/home" || req.url === "/") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, { "Content-Type": "text/txt" });
      fs.createReadStream(
        "/Users/it012306/Desktop/node/mikalto/modules/roomtype/roomTypeDB.txt"
      ).pipe(res);
    }
  });
  server.listen(3001, "127.0.0.1",(err)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log("success");
      }
  });
  