const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Testing workflows - PR Labeling bump:minor");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
