const caculatorUi = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Simple Calculator</h1>");
    res.write("<form action='/calculate-result' method='POST'>");
    res.write(
      "<input type='number' name='num1' placeholder='Enter first number' required></br>"
    );
    res.write(
      "<input type='number' name='num2' placeholder='Enter second number' required></br>"
    );
    res.write("<input type='submit' value='Sum'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parseBody);
      const num1 = parseFloat(params.get("num1"));
      const num2 = parseFloat(params.get("num2"));
      const result = num1 + num2;

      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Calculation Result</title></head>");
      res.write("<body>");
      res.write(`<h1>Result: ${num1} + ${num2} = ${result}</h1>`);
      res.write("</body>");
      res.write("</html>");
      return res.end();
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

module.exports = caculatorUi;
