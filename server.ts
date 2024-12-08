const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/stats", (req, res) => {
  res.status(200).send({
    stats: "Get OK",
  });
});

app.post(`/stats/:id`, (req, res) => {
  const { id } = req.params;
  const { stats } = req.body;

  res.status(200).send({
    stats: "Post OK",
  });
});
