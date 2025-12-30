console.log("This is the first JavaScript file.");

const fs = require("fs");
fs.writeFile(
  "output.js",
  "const greeting = () => console.log('Hello, world!'); greeting();",
  (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log("File written successfully.");
    }
  }
);
