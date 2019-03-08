const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

// https://gist.github.com/andrewjmead/c7d26a25ddc793f4210201747a9ba429

// Load and parse JSON-Data
const dataBuffer = fs.readFileSync("1-JSON.json");
const data = dataBuffer.toString();
const dataObj = JSON.parse(data);
dataObj.name = "Uffe";
dataObj.age = 51;
const back = JSON.stringify(dataObj);
fs.writeFileSync("1-json.json", back);
// Change name and age
//Stringify
