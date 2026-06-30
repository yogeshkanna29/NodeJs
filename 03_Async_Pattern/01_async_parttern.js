import { readFile, writeFile } from "fs";
import util from "util";

// Async pattern - Refactor for in built promises from util

const readFilePromise = util.promisify(readFile);
const wrtieFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    await wrtieFilePromise(
      "./content/result-mind-grenade.txt",
      `This is From File Promise ${first} ${second}`,
    );
    console.log(`The content is :: ${first} - ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();

// Async pattern - Refactor for promises

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(`The content is :: ${first} - ${second}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
