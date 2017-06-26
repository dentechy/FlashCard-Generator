const BasicCard = require("./BasicCard.js");
const ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.text);
