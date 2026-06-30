import express from "express";
import datas from "./data.js";
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="api/datas">Datas</a> <a href="api/datas/V59OF92YF627HFY0">Data by ID</a>');
});

app.get("/api/datas", (req, res) => {
  const newDatas = datas.map((data) => {
    const { name, language, bio } = data;
    return { name, language, bio };
  });

  res.json(newDatas);
});

app.get("/api/datas/:dataID", (req, res) => {
  console.log(req.params);

  const { dataID } = req.params;

  const singleData = datas.find(
    (data) => data.id === dataID
  );

  if(!singleData){
    return res.status(404).send("Product does not exits");
  }

  res.json(singleData);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000..");
});
