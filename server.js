const http = require("http");
//file system module
const fs = require("fs");
const port = 3000;
const hostname = "localhost";

//moment module - for dates format and so on
const moment = require("moment");
const christmas = "2022-12-25";
console.log(moment(christmas).format("LL"));

const server = http.createServer((req, res) => {
  //   console.log("A request is made");
  //   console.log("request url", req.url);
  //   console.log("request method", req.method);
  res.setHeader("Content-Type", "text/html");

  let route = "./views/";
  switch (req.url) {
    case "/":
      route += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.statusCode = 301;
      //the url is accepted and will be
      //redirected to the headers params
      res.setHeader("Location", "/contact");
      res.end();
      break;
    default:
      route += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
      //same result in one line res.edn(data)
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
