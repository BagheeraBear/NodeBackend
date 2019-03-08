const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.2.0");

// functions for notes-app
// add, remove, read, list

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note content",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    getNotes.addNote(argv.title, argv.body)
    // console.log(
    //   "Title of note: " + argv.title + "\nBody of note: " + argv.body
    // );
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing note");
  }
});

// read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note..");
  }
});

// list
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("Listing all notes..");
  }
});

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();

/*
Process
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Dev\\Node3-git\\app.js' ]

Yargs
{ 
  _: [],
  '$0': 'app.js' 
}

With arguments
{ 
  _: ['add'], 
  title: 'Things to buy', 
  '$0': 'app.js' 
}

*/
