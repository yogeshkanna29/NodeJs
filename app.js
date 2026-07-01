import express from "express";
import datas from "./data.js";
import { writeFileSync } from "fs";
const app = express();

// static assets
app.use(express.static("./methods-public"));

// Get all people

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: datas });
});

// Get a single person by ID

app.get("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const data = datas.find((person) => String(person.id) === String(id));
  if (!data) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }
  res.status(200).json({ success: true, data });
});

// Parse from data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/api/newPerson", (req, res) => {
  const { name, language, bio, version } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }

  try {
    const newPerson = { name, language, bio, version };

    writeFileSync(
      "./data.json",
      JSON.stringify([...datas, newPerson], null, 2),
    );

    res.status(201).json({
      success: true,
      message: "Person added successfully",
      person: newPerson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save person",
      error: error.message,
    });
  }
});

app.put("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const { name, language, bio, version } = req.body;

  const personIndex = datas.findIndex(
    (person) => String(person.id) === String(id),
  );
  if (personIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }
  const updatedPerson = { ...datas[personIndex], name, language, bio, version };

  writeFileSync(
    "./data.json",
    JSON.stringify(
      [
        ...datas.slice(0, personIndex),
        updatedPerson,
        ...datas.slice(personIndex + 1),
      ],
      null,
      2,
    ),
  );

  res.status(200).json({
    success: true,
    message: "Person updated successfully",
    person: updatedPerson,
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
