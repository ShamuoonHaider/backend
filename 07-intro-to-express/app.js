const http = require("http");
const requestHandler = require("./user");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.use((res, req, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to complete coding Nodejs Series");
});

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
