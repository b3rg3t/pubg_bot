import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import config from "./config.ts";
import { app } from "./app.ts";
import { formatString } from "./utils/formatString.ts";
import { kraftonEndpoints } from "./models/enums/kraftonEndpoints.ts";

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send({
    stats: "Get OK",
  });
});

app.get("/pokemon", async (req: Request, res: Response) => {
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

app.get("/stats", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.get(
      config.KRAFTON_BASE_URL +
        formatString(kraftonEndpoints.getPlayerData, ["bergetspung"]),
      {
        headers: {
          Authorization: `Bearer ${process.env.KRAFTON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      }
    );
    console.log(config.KRAFTON_BASE_URL);
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ errorMessage: "Something wrong" });
  }
});

// app.post(`/stats/:id`, (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { stats } = req.body;

//   res.status(200).send({
//     stats: "Post OK",
//   });
// });
