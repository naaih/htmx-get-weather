import express from "express";

const app = express();

// MIDDLEWARE:
// set static folder
app.use(express.static("public"));
//parse url encoded stuff sent by html
app.use(express.urlencoded({ extended: true }));
// parse json stuff sent by the apui
app.use(express.json());

let currentTemperature = 27;

// Handle GET request for weather
app.get("/get-temperature", (req, res) => {
  currentTemperature += Math.random() * 2 - 1; // Random temp change
  res.send(currentTemperature.toFixed(1) + "°C");
});

// server started on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
