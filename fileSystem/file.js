const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

// synchonous
fs.writeFileSync("./synchonous.txt", "Hey Everyone! synchonous");

// Asynchonous
fs.writeFile("./Asynchonous.txt", "Hey Everyone! Asynchonous", (err) => err && console.log(err));


// synchonous -- Blocking request
const result = fs.readFileSync("readFile.txt", "utf-8")
console.log(result);


// Asynchonous -- Non Blocking request
fs.readFile("./readFile.txt", "utf-8", (err, data) => err ? console.log(err) : console.log(data))



