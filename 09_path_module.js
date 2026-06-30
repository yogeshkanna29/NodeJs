const path = require("path");

// Root Path
console.log(path.sep);

// Join Path
const filePath = path.join("/content/", "subFolder", "test.txt");
console.log(filePath);

// Basename of Path
const base = path.basename(filePath);
console.log(base);

// Full url of Path
const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");
console.log(absolute);
