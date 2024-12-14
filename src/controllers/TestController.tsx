import { Request, Response } from "express";
// import axios, { AxiosResponse } from "axios";
import { app } from "src/app";

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send({
    stats: "Get OK",
  });
});
