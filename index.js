//create server

const http = require("http");
const handleAllRequest = (req, res) => {
 
  const url = req.url;
  if (url === "/"){
    res.write("<h1>Welcome to my node.js server </h1>")
  }else if(url ==='/about'){
    res.write("<h1>This is the about page</h1>")
  }else if(url ==='/contact'){
    res.write("<h1>Contact us @dukarpriscilla@gmail.com</h1>")
  }else{
    res.write("<h1>404 page not found</h1>")
  }
  res.end()

  }

const server = http.createServer(handleAllRequest);

server.listen(4000, "localhost", () =>
  console.log("server is live on port 5000")
);
