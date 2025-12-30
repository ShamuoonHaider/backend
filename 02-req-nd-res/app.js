const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write(
    '<body><h1>Hello from my Node.js Server!</h1><form method="POST" action="/"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
  );
  res.write("</html>");
  res.end();
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
