import http from "http";
import * as fs from "fs/promises";
let port = "5000";

async function writeDetails(data) {
  let reasultofRead = await fs.readFile("./formDB.txt", "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      return;
    }
  });
  reasultofRead += data;
  console.log(reasultofRead);
  await fs.writeFile("./formDB.txt", reasultofRead, (err) => {
    if (err) {
      console.log(TypeError);
    }
  });
}

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let formData = "";
    req.on("data", (formDataPeices) => {
      formData = formDataPeices.toString();
    });
    req.on("end", () => {
      if (Object.keys(formData).length !== 0) {
        console.log(formData);
        writeDetails(formData);
      }
    });
    res.end("hello");
  } catch (err) {
    console.log(err);
  }
});
server.listen(port, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
  }
});
