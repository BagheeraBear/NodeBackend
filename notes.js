const fs = require("fs");
const chalk = require("chalk");
// console.log("notes.js");

const getNotes = () => {
  return "Here are your notes...";
};

const addNote = (title, body) => {

  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title)

  const duplicateNote = notes.find((note) => note.title === title)

  // const duplicateNotes = notes.filter(function(note) {
  //   return note.title === title;
  // });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);

    console.log(chalk.green.inverse("Added note uniquely"));
  } else {
    console.log(chalk.red.inverse("Note title is already taken by someone else"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Removed note from notes.js: ") + title);
    saveNotes(filteredNotes);
  } else {
    console.log(
      chalk.red.inverse("No note removed - title does not exist: ") + title
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.green.inverse("Here are your notes: /n"))
  notes.forEach((note) => console.log(note.title) + "/n" )
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title )
  if (note) {
    console.log(chalk.green.inverse("Here is your note with the Title: " ) + title )
    console.log("Body: " + note.body)
  }
  else{
    console.log(chalk.red.inverse("Note could not be found! Sorry about that"))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
