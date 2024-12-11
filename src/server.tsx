import express, { Request, Response } from "express";
import axios from "axios";
import config from "./config.ts";
import { app } from "./app.ts";

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send({
    stats: "Get OK",
  });
});

app.get("/pokemon", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response);
    res.status(200).send({
      data: response.data,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/stats", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(config.KRAFTON_BASE_URL);
    console.log(config.KRAFTON_BASE_URL);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

  res.status(200).send({
    stats: "Get OK",
  });
});

app.post(`/stats/:id`, (req: Request, res: Response) => {
  const { id } = req.params;
  const { stats } = req.body;

  res.status(200).send({
    stats: "Post OK",
  });
});
