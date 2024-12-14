import { Request, Response } from "express";
import { app } from "../app.ts";
import axios, { AxiosResponse } from "axios";

app.get("/pokemon", async (req: Request, res: Response) => {
    console.log("this ran")
  try {
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    );
    console.log(response);
    res.status(200).send({
      data: response.data,
    });
  } catch (err) {
    console.log(err);
  }
});
