import express from "express";
import logger from "./logger.js";
import authorize from "./authorize.js";

const app = express();

// req -> middleware -> res

// 1. use vs route
// 2. options - our own / express / third party

app.use(authorize, logger);
// app.use(authorize);
// app.use('/api',logger);

// api/home/about/data/products

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/data", (req, res) => {
  res.send("API Data");
});

app.get("/products", (req, res) => {
  res.send("API Products");
});

// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

// app.get("/about", logger, (req, res) => {
//   res.send("About");
// });

// app.get("/api/data", logger, (req, res) => {
//   res.send("API Data");
// });

// app.get("/api/products", logger, (req, res) => {
//   res.send("API Products");
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
