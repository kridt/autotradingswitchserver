const express = require("express");
const app = express();
const port = 3000;

// Global variabel til at holde trading status
let tradingEnabled = false;

// Route for at hente trading status
app.get("/control", (req, res) => {
  if (tradingEnabled) {
    res.send("enable");
  } else {
    res.send("disable");
  }
});

// Route for at skifte trading status
app.get("/toggle", (req, res) => {
  tradingEnabled = !tradingEnabled;
  res.send(`Trading enabled: ${tradingEnabled}`);
});

// Start serveren
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
