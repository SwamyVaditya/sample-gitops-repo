const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("Testing cd-prod workflow!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});