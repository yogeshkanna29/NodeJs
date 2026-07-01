import express from "express";
import datas from "./data.js";
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1><a href="api/datas">Datas</a> <a href="api/datas/V59OF92YF627HFY0">Data by ID</a>',
  );
});

app.get("/api/datas", (req, res) => {
  const newDatas = datas.map((data) => {
    const { name, language, bio } = data;
    return { name, language, bio };
  });

  res.json(newDatas);
});

app.get("/api/datas/:dataID", (req, res) => {
  console.log(req.query);

  const { dataID } = req.params;

  const singleData = datas.find((data) => data.id === dataID);

  if (!singleData) {
    return res.status(404).send("Product does not exits");
  }

  res.json(singleData);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedDatas = [...datas];

  if (limit && isNaN(limit)) {
    return res.status(400).json({ message: "Limit must be a number" });
  }

  if (search && typeof search !== "string") {
    return res.status(400).json({ message: "Search must be a string" });
  }

  if (search) {
    sortedDatas = sortedDatas.filter((data) => {
      const sanitsedname = data.name.toLowerCase();
      const sanitsedSearch = search.toLowerCase();
      return sanitsedname.startsWith(sanitsedSearch);
    });
  }

  if (limit) {
    sortedDatas = sortedDatas.slice(0, Number(limit));
    if (sortedDatas.length < 1) {
      return res.status(200).json({ success: true, data: [] });
    }
  }
  res.status(200).json(sortedDatas);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000..");
});
