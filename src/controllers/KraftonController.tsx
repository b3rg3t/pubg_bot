import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { app } from "../app.ts";
import config from "src/config.ts";
import { kraftonEndpoints } from "src/models/enums/kraftonEndpoints.ts";
import { get } from "src/middleware/kraftonProvider.ts";
import { formatString } from "src/utils/formatString.ts";

// app.get("/stats", async (req: Request, res: Response) => {
//     try {
//         const response: AxiosResponse = await axios.get(
//           config.KRAFTON_BASE_URL +
//             formatString(kraftonEndpoints.getPlayerData, ["bergetspung"]),
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.KRAFTON_API_KEY}`,
//               Accept: "application/vnd.api+json",
//             },
//           }
//         );
//         console.log(config.KRAFTON_BASE_URL);
//         console.log(response.data);
//         res.status(200).send(response.data);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ errorMessage: "Something wrong" });
//       }
// });

app.get(`/stats/:id`, (req: Request, res: Response) => {
  const { id } = req.params;
  //   const { stats } = req.body;
  get({ url: kraftonEndpoints.getPlayerData, args: ["bergetspung"] });
});
