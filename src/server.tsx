import express from "express";
import axios from "axios";
import config from "./config.ts";

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/pokemon", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response)
  } catch (err) {
    console.log(err);
  }

  res.status(200).send({
    stats: "Get OK",
  });
});


app.get("/stats", async (req, res) => {
  try {
    // const response = await axios.get(config.KRAFTON_BASE_URL);
    console.log(config.KRAFTON_BASE_URL)
    // console.log(response)
  } catch (err) {
    console.error(err);
  }

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
