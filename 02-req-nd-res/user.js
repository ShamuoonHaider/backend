const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<h1>Home Page</h1>");
    res.write("<form action='/create-user' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter username'></br>"
    );

    res.write("<input type='radio' id='male' name='gender' value='male'>");
    res.write("<label for='male'> Male</label><br>");
    res.write("<input type='radio' id='female' name='gender' value='female'>");
    res.write("<label for='female'> Female</label><br>");
    res.write("<input type='submit' value='Create user'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
