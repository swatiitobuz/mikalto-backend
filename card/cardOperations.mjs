import * as cardData from "./cardDB.mjs";
import * as fs from "fs";
const cardArray = JSON.stringify(cardData);

try {
  let resultofWrite = fs.writeFile("./cardDatabase.txt",cardArray,(err)=> {
    if(err){
      console.log(err);
    }
    else{
      console.log("succeeded");
    }
  });
  console.log("succeeded");
} catch (err) {
  console.log(err);
}
