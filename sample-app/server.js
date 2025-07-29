const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Congratulations again!!! Argo CD Worked Excellently!!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
