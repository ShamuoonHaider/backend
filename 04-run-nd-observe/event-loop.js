console.log("1. Start of the Script");

Promise.resolve().then(() => console.log("3. Microtask 1"));

setTimeout(() => console.log("4. Timer 1"), 0);

const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("6. I/O operation"));

setImmediate(() => console.log("5. Immediate 1"));

process.on("exit", (code) => {
  console.log("7. Exit event");
});

console.log("2. End of script");
