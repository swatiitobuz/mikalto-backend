const http = require("http");
const fs = require("fs");
const parse = require("querystring");

const server = http.createServer((req, res) => {
  console.log("a request is made on " + req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.writeHead(200, { "Content-Type": "text/txt" });
  let formDetail = "";
  res.on("data", (formData) => {
    formDetail = formData.toString();
  });
  res.on("end", () => {
    console.log(parse(formDetail));
  });
  // res.end(
  //   "Hello"
  // )
  if (req.url === "/home" || req.url === "/") {
    
    fs.createReadStream(
      "/Users/it012306/Desktop/node/mikalto/modules/card/cardDatabase.txt"
    ).pipe(res);
  } else {
    res.end("no routes");
  }
});
server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
