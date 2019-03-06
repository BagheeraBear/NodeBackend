// modules

// require
// node core module
const fs = require("fs");
// fs.writeFileSync('notes.txt', 'My name is Uffe');

// challenge 1 -  append a message
// appendFileSync

fs.appendFileSync("notes.txt", "\nThis is the appended text");
