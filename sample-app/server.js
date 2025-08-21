const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Testing workflows files - 2");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
