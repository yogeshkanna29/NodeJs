import http from "http";
import { readFileSync } from "fs";

// Get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  //   console.log("User hit the server");
  const url = req.url;
  //   res.writeHead(200, { "content-type": "text/plain" });

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } 
  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } 
  // Contact Page
  else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } 
  // No Page
  else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});

server.listen(5000);
