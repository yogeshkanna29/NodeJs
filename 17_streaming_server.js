import http from "http";
import fs from "fs";

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    // return;

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
