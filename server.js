const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user one", "user Two", "user Three"] });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
