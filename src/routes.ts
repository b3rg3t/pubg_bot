import { Express, Request, Response } from "express";
import axios from "axios";
import config from "./config";

function routes(app: Express) {
  /**
   * @openapi
   * /test:
   *  get:
   *     tags:
   *     - Test
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/test", (req: Request, res: Response) => {});

  /**
   * @openapi
   * /pokemon:
   *  get:
   *     tags:
   *     - Pokémon
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/pokemon", async (req: Request, res: Response) => {});

  /**
   * @openapi
   * /stats:
   *  get:
   *     tags:
   *     - Stats
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/stats", async (req: Request, res: Response) => {});

  /**
   * @openapi
   * /stats/:id:
   *  get:
   *     tags:
   *     - Stats
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.post(`/stats/:id`, (req: Request, res: Response) => {});
}

export { routes };
