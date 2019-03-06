// node_modules [dependencies, npm-modules]
const validator = require("validator");
// pretty console output
const chalk = require("chalk");
// cool textfile output
const emoji = require("node-emoji");

// node core module - file system
const fs = require("fs");

// My own files
const add = require("./utils.js");
const getNotes = require("./notes.js");

const getArticles = require("./articles.js");
const getCustomers = require("./customers.js");

// const name = "Uffe";
const text = getNotes();
console.log(text);

// console.log(getCustomers());
// console.log(getArticles());

console.log(validator.isEmail("ulf@swedin.nu"));

console.log(chalk.gray.bgWhite.inverse("Success!!"));
fs.writeFileSync(
  "Whoatext.txt",
  emoji.get("coffee") + emoji.get("joystick") + emoji.get("secret")
);
// challenge 2
// const text = getNotes();
// console.log(text);

console.log(process.argv[2]);
