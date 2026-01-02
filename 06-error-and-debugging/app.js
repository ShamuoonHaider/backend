const http = require("http");
const syntaxError = require("./syntax");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  syntaxError();
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
