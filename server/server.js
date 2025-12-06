const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/api/ping", (req, res) => {
  res.json({ message: "Meditrack backend is alive 🔵" });
});


app.get("/api/appointments", (req, res) => {
  
  const filePath = path.join(
    __dirname,
    "..",
    "client",
    "src",
    "data",
    "appointments.json"
  );

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    res.json(data); 
  } catch (err) {
    console.error("Error reading appointments.json", err);
    res.status(500).json({ error: "Failed to load appointments" });
  }
});


app.listen(PORT, () => {
  console.log(`Meditrack backend running on http://localhost:${PORT}`);
});