import { Request, Response } from "express";
import { app } from "../app.ts";
import axios, { AxiosResponse } from "axios";

app.get("/pokemon", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    );

    res.status(200).send({
      data: response.data,
    });
  } catch (err) {
    console.log(err);
  }
});
