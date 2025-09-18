const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("Testing workflows with ArgoCD!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});