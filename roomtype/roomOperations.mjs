// import * as roomTypeData from "./roomType.mjs";
import * as fs from "fs";
// const roomArray = JSON.stringify(roomTypeData);
let roomTypeArray = "";
try {
    let resultOfread = fs.readFileSync("./roomTypeDB.txt");
        roomTypeArray = JSON.parse(resultOfread);
        console.log("succeeded");
  } catch (err) {
    console.log(err);
  }
  
