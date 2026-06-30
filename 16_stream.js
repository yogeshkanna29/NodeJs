import { createReadStream } from "fs";

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 900,
  encoding: "utf8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000})
// const stream = createReadStream("../content/big.txt", {encoding: 'utf8})

stream.on("data", (result) => {
  console.log(result);
});
