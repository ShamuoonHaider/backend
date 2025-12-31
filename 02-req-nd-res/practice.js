const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("<h1>Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Men's Section</title></head>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("<body><h1>Welcome to Men's Section</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Women's Section</title></head>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("<body><h1>Welcome to Women's Section</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Kids' Section</title></head>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("<body><h1>Welcome to Kids' Section</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Your Cart</title></head>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("<body><h1>Your Shopping Cart is Empty</h1></body>");
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
