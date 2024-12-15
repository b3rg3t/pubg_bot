import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { app } from "../app.ts";
import config from "src/utils/config.ts";
import { kraftonEndpoints } from "src/models/enums/kraftonEndpoints.ts";
import { get } from "src/middleware/kraftonProvider.ts";
import { formatString } from "src/utils/formatString.ts";
import { playerData } from "src/__mocks__/playerData.ts";

app.get("/stats", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.get(
      config.krafton.baseUrl +
        formatString(kraftonEndpoints.getPlayerData, ["bergetspung"]),
      {
        headers: {
          Authorization: `Bearer ${process.env.KRAFTON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      }
    );

    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send({ errorMessage: "Something wrong" });
  }
});

app.get(`/stats/:playerName`, async (req: Request, res: Response) => {
  const { playerName = "bergetspung" } = req.params;

  const response = await get({
    url: kraftonEndpoints.getPlayerData,
    args: [playerName],
  });

  res.status(200).send(response);
});

app.get(`/match`, async (req: Request, res: Response) => {
  const { id = playerData.data[0].relationships.matches.data[0].id } =
    req.params;

  const response = await get({ url: kraftonEndpoints.getMatch, args: [id] });

  res.status(200).send(response);
});

app.get(`/ranked/:playerId`, async (req: Request, res: Response) => {
  const { playerId = playerData.data[0].relationships.matches.data[0].id } =
    req.params;

  const response = await get({
    url: kraftonEndpoints.getPlayerRankedStats,
    args: ["steam", "33", playerId],
  });

  res.status(200).send(response);
});


app.get(`/seasons`, async (req: Request, res: Response) => {
  const { playerId = playerData.data[0].relationships.matches.data[0].id } =
    req.params;

  const response = await get({
    url: kraftonEndpoints.getSeasons,
  });

  res.status(200).send(response);
});
