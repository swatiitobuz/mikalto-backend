// import * as cardData from "./cardDB.mjs";
import * as fs from "fs";
let cardValues = "";

try {
  let resultOfread = fs.readFileSync("./cardDatabase.txt");
      cardValues = JSON.parse(resultOfread);
      console.log("succeeded");
} catch (err) {
  console.log(err);
}
