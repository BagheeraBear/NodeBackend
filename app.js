const add = require("./utils.js");
const getNotes = require("./notes.js");

const getArticles = require("./articles.js");
const getCustomers = require("./customers.js");

// const name = "Uffe";
const text = getNotes();
console.log(text);

console.log(getCustomers());
console.log(getArticles());

// challenge 2
// const text = getNotes();
//console.log(text);
