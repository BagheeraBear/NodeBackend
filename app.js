const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!");
  }
});

console.log(yargs.argv);

const command = process.argv[2];

if (command === "add") {
  console.log("Note added");
} else if (command === "remove") {
  console.log("Note removed");
}
