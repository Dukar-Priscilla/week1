//create server

const http = require("http");
const handleAllRequest = (req, res) => {
  res.write("hi,i just recieved a request");
  const url = req.url;
  if (url === "/contact") {
    res.write("<h1>Welcome to home page</h1>");
  } else if (url === "/about") res.write("<h1>Welcome to the about page</h1>");
  console.log(req);
};

const server = http.createServer(handleAllRequest);

server.listen(4000, "localhost", () =>
  console.log("server is live on port 5000")
);
