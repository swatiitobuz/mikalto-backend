import * as roomTypeData from "./roomType.mjs";
import * as fs from "fs";
const roomArray = JSON.stringify(roomTypeData);
try {
  let resultOfWrite = fs.writeFile("./roomTypeDB.txt", roomArray, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("succeeded");
      console.log(resultOfWrite);
    }
  });
} catch (err) {
  console.log(err);
}
