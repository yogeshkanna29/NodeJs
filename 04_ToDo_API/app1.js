import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup statuc and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.sendFile(path.join(__dirname, "index.html"));
});

// adding to static assets
// SSR

// app.get("/about", (req, res) => {
//   console.log("User hit the resource");
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.all("/*splat", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
