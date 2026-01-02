const fs = require("fs");

const requestHandler = (req, res) => {
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
  } else if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);

      const params = new URLSearchParams(parseBody);

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFile("user.txt", JSON.stringify(bodyObj), (error) => {
        console.log("data written successfully" || error);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
